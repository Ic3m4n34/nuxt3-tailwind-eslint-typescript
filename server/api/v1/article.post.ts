import openai from '@/lib/openai';

type Section = {
  number: string;
  title: string;
  items: string[];
}

type InitialResponse = {
  text: string;
  sections: Section[];
}

const getOutlineForTopic = async (topic: string, tone: string): Promise<InitialResponse> => {
  try {
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'Du bist ein kluger, fachkundiger Autor, der eine Fülle von Details und Informationen zu einem Thema weitergibt, von Übersichten auf hohem Niveau über Nischenthemen bis hin zu selten bekannten kleinen Details.',
        },
        {
          role: 'user',
          content: `Schreibe eine kreative Gliederung zu "${topic}" (mit Unterthemen, die in einem ${tone} und prägnant formuliert sind). Achte darauf, dass deine Antwort komplett ist und mit einem Fazit abschließt.`,
        },
      ],
      frequency_penalty: 0.7,
      temperature: 0.4,
      max_tokens: 250,
    });

    const outline = completion.data.choices[0].message!.content;

    const sections = outline.split(/\n(?=[IVX]+\.\s)/);

    const parsed = sections.map((section) => {
      const [title, ...items] = section.split('\n').filter((item) => item !== '');
      return {
        number: title.split('.')[0],
        title: title.split('.')[1].trim(),
        items: items.map((item) => item.trim()).filter((item) => item !== ''),
      };
    });

    console.log('=====================');
    console.log('outline:', outline);
    console.log('parsed:', parsed);
    console.log('=====================');

    return {
      text: outline,
      sections: parsed,
    };
  } catch (error) {
    throw new Error('Couldn\'t get outline for topic');
  }
};

const getTextForSection = async (topic: string, tone: string, completeOutline: string, section: Section, index: number, sectionCount: number) => {
  const sectionOutline = `${section.title} \n\n${section.items.map((item) => `- ${item}`).join('\n')} \n\n`;

  try {
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'Du bist ein kluger, wortgewandter und fachkundiger Autor mit einem beeindruckenden Wortschatz.',
        },
        {
          role: 'user',
          content: 'Bevor du mit dem Artikel anfängst, solltest du zunächst eine Gliederung zu einem Thema erstellen, das dir Spaß macht und über das du einen sehr ausführlichen Artikel schreiben kannst.',
        },
        {
          role: 'assistant',
          content: `Das Thema ist ${topic}:${completeOutline}}`,
        },
        {
          role: 'user',
          content: `Die Gliederung verweist auf Abschnitte eines ${tone} über ${topic} erklärt.
            Schreibe Abschnitt ${index + 1} / ${sectionCount} des Artikels, der diese Themen behandelt:${sectionOutline}\n\nSchreibe mindestens 3 Absätze pro Unterthema. Schreibe in einem lockeren, informellen Stil. Füge HTML-Header-Tags nur um Titel und Untertitel herum ein. Keine anderen HTML-Tags. Gib jedem Abschnitt einen kreativen oder zum Nachdenken anregenden Untertitel, aber nummeriere die Abschnitte in keiner Weise. Benutze viele Details. Duze den Leser!`,
        },
      ],
      frequency_penalty: 0.7,
      temperature: 0.82,
      max_tokens: 2048,
    });

    const sectiontext = completion.data.choices[0].message!.content;

    console.log('sectiontext:', sectiontext);
    console.log('=====================');

    return sectiontext;
  } catch (error) {
    throw new Error('Couldn\'t get text for section');
  }
};

export default defineEventHandler(async (event) => {
  const { topic, tone } = await readBody(event);

  let response = '';

  const initialResponse = await getOutlineForTopic(topic, tone);

  const texts = await Promise.all(initialResponse.sections.map(async (section, index) => getTextForSection(topic, tone, initialResponse.text, section, index, initialResponse.sections.length)));

  response += texts.join('\n\n');

  return response;
});
