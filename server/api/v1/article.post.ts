import openai from '@/lib/openai';

export default defineEventHandler(async (event) => {
  let response = '';

  const completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: 'Hallo GPT' }],
  });

  response = completion.data.choices[0].message.content;

  const completion2 = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: 'Wie geht es dir?' }],
  });

  response += completion2.data.choices[0].message.content;

  const completion3 = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: 'Wie war das Wetter am 01.03.2002 in New York City?' }],
  });

  response += completion3.data.choices[0].message.content;

  return response;
});
