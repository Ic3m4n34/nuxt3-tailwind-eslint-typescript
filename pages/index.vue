<template>
  <div class="">
    <div class="mb-8">
      <input
        v-model="topic"
        class="border border-gray-400 py-2 px-4 rounded-md mr-4"
        type="text"
      />

      <select
        v-model="selectedOption"
        class="border border-gray-400 p-2 rounded-md mr-4"
      >
        <option value="lockerer">
          Lockerer
        </option>
        <option value="professioneller">
          Professioneller
        </option>
      </select>

      <button
        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        @click="handleData"
      >
        Fetch
      </button>
    </div>

    <div class="my-4">
      <span class="font-bold">Wörter:</span> {{ wordCount }}
    </div>

    <div class="prose mb-8">
      <h1>
        Thema: {{ topic }}
      </h1>
    </div>

    <div class="flex flex-row space-x-4">
      <textarea
        v-model="text"
        class="w-1/2 border-2 border-gray-600 rounded-md p-2"
      />
      <div
        class="prose w-1/2 border-2 border-green-600 rounded-md p-2"
        v-html="rendered"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import MarkdownIt from 'markdown-it';

const markdown = new MarkdownIt({
  html: true,
});

const getWordCount = (str: string) => str.split(' ')
  .filter((n) => n !== '')
  .length;

const topic = ref('Der richtige Grill');
const selectedOption = ref('lockerer');

const text = ref('# Einleitung\n\nHerzlich willkommen zu unserem Artikel über den richtigen Grill! Ob du ein Grillmeister bist oder zum ersten Mal einen Grill kaufen möchtest, es gibt viele verschiedene Arten von Grills zur Auswahl. Aber warum ist es so wichtig, den richtigen Grill zu wählen? Nun, der falsche Grill kann die Qualität des Essens beeinträchtigen und das Grillerlebnis beeinträchtigen. Wenn du zum Beispiel einen Gasgrill verwendest, aber lieber den Rauchgeschmack von Holzkohle magst, wirst du nie zufrieden sein. In diesem Artikel werden wir uns die verschiedenen Arten von Grills ansehen und wie man den richtigen für seine Bedürfnisse wählt.\n\n## Die verschiedenen Arten von Grills\n\nEs gibt drei Haupttypen von Grills: Gasgrills, Holzkohlegrills und Elektrogrills. Jeder Typ hat seine eigenen Vor- und Nachteile und ist für unterschiedliche Bedürfnisse geeignet.\n\nGasgrills sind eine gute Wahl für diejenigen, die schnell kochen möchten und keine Zeit haben, das Feuer anzuzünden oder Kohlen vorzubereiten. Sie sind auch einfach zu bedienen und zu reinigen. Einige Modelle haben sogar zusätzliche Funktionen wie ein Seitenbrenner zum Kochen von Beilagen oder einem Rotisserie-Set zum Braten eines ganzen Hähnchens.\n\nHolzkohlegrills sind ideal für alle, die auf rauchige Aromen stehen. Das Anzünden der Kohlen kann zwar eine gewisse Zeit in Anspruch nehmen, aber der Geschmack ist es wert! Der Nachteil ist jedoch, dass sie mehr Wartung erfordern als Gasgrills, da die Asche entsorgt und die Grillroste gereinigt werden müssen.\n\nElektrogrills sind eine gute Wahl für diejenigen, die in Wohnungen oder Stadtgebieten leben, in denen Holzkohle- oder Gasgrills nicht erlaubt sind. Sie sind auch sehr einfach zu bedienen und benötigen wenig Wartung. Der Nachteil ist jedoch, dass sie nicht so heiß werden wie Gas- oder Holzkohlegrills und kein Raucharoma bieten.\n\nIn diesem Artikel werden wir uns jeden Grilltyp genauer ansehen und dir helfen, den richtigen Grill für deine Bedürfnisse zu finden!\n\nVorteile und Nachteile des Gasgrills\n\nGasgrills sind bei vielen Menschen sehr beliebt, da sie eine schnelle und einfache Möglichkeit bieten, köstliches Grillgut zu zaubern. Einer der größten Vorteile von Gasgrills ist die schnelle Aufheizzeit. Innerhalb weniger Minuten ist der Grill auf Betriebstemperatur und man kann mit dem Grillen starten. Zudem sind sie einfach zu bedienen und die Temperatur kann leicht reguliert werden. Auch die Reinigung gestaltet sich meist unkompliziert, da Fett und Öl in einen Auffangbehälter laufen.\n\nAuf der anderen Seite sind Gasgrills oft teurer als andere Arten von Grills wie beispielsweise Holzkohlegrills. Auch benötigen sie Gasflaschen oder Anschlüsse an das Leitungsnetz, was zusätzliche Kosten verursacht. Ein weiterer Nachteil ist der fehlende Rauchgeschmack, den viele Menschen mit einem traditionellen BBQ assoziieren.\n\nWorauf beim Kauf eines Gasgrills achten?\n\nBeim Kauf eines Gasgrills gibt es einige wichtige Dinge zu beachten. Zunächst sollte man sich überlegen, wofür man den Grill hauptsächlich nutzen möchte. Wenn man beispielsweise häufig für große Gruppen grillt, sollte man einen Grill mit einer ausreichend großen Grillfläche wählen.\n\nAuch die Leistung des Brenners spielt eine entscheidende Rolle. Eine höhere Leistung bedeutet in der Regel eine schnellere Aufheizzeit und bessere Ergebnisse beim Grillen von Fleisch oder Gemüse.\n\nSchließlich sollten auch Materialien und Qualität berücksichtigt werden - ein gut gebauter Grill aus hochwertigen Materialien wird in der Regel länger halten und ein besseres Grillerlebnis bieten.\n\n\nTipps zur Nutzung und Reinigung eines Gasgrills\n\nUm das Beste aus einem Gasgrill herauszuholen, ist es wichtig, den Grill korrekt zu nutzen und zu pflegen. Ein wichtiger Faktor dabei ist die Temperaturregelung - man sollte immer darauf achten, dass der Grill auf der richtigen Temperatur gehalten wird, um das Grillgut gleichmäßig zu garen.\n\nBeim Reinigen des Grills ist es wichtig, regelmäßig den Fett- und Ölabscheider zu leeren und das Gitterrost gründlich abzubürsten. Auch die Brenner sollten regelmäßig gereinigt werden, um Verstopfungen zu vermeiden. Insgesamt empfiehlt es sich, den Grill nach jedem Gebrauch gründlich zu reinigen, um eine lange Lebensdauer des Grills sicherzustellen.\n\nVorteile und Nachteile von Holzkohlegrills\n\nEin Holzkohlegrill hat seine Vorteile und Nachteile. Einer der größten Vorteile ist, dass er ein unvergleichliches Raucharoma produziert, das dem Grillgut einen scharfen, einzigartigen Geschmack verleiht. Durch die Verwendung von Kohle wird auch eine hohe Hitze erzeugt, die es ermöglicht, Fleisch und andere Lebensmittel schnell zu grillen. Ein weiterer Vorteil ist der günstige Preis im Vergleich zu anderen Arten von Grills.\n\nAuf der anderen Seite besteht einer der größten Nachteile darin, dass es schwieriger ist, die Temperatur genau zu steuern. Wenn man nicht aufpasst, können die Lebensmittel verkohlen oder sogar verbrennen. Auch dauert das Erhitzen des Grills länger als bei einem Gas- oder Elektrogrill.\n\nWorauf beim Kauf achten?\n\nBeim Kauf eines Holzkohlegrills gibt es mehrere Faktoren zu berücksichtigen. Zunächst sollte man auf die Größe achten und sicherstellen, dass sie den Anforderungen entspricht. Wenn man oft für eine große Anzahl von Menschen grillt oder größere Stücke Fleisch grillen möchte, sollte man einen größeren Grill wählen.\n\nDie Qualität des Materials ist ein weiterer wichtiger Faktor. Der Grill sollte aus hochwertigem Edelstahl gefertigt sein und eine robuste Konstruktion aufweisen. Wenn man beispielsweise einen mobilen Grill kauft, sollte dieser auch stabil genug sein um ihn einfach transportieren zu können.\n\nTipps zur Nutzung und Reinigung\n\nUm den Holzkohlegrill optimal zu nutzen, sollte man ihn vor dem Gebrauch richtig vorbereiten. Zunächst sollte man die Kohle auf den Grill legen und diese dann mit einem Anzündkamin anzünden. Sobald die Kohle glüht, kann man das Grillgut auflegen. Wichtig ist es auch, den Grill während des Gebrauchs im Auge zu behalten und regelmäßig umzudrehen.\n\nDie Reinigung des Holzkohlegrills ist ebenfalls wichtig, um eine optimale Leistung und Hygiene zu gewährleisten. Die Asche sollte nach jedem Gebrauch sorgfältig entfernt werden und der Grill gründlich gereinigt werden. Hierfür kann man spezielle Grillreiniger verwenden oder einfach warmes Wasser und Spülmittel benutzen.\n\nInsgesamt ist der Holzkohlegrill eine beliebte Wahl für Menschen, die ein intensives Raucharoma und eine rustikale Zubereitung ihrer Speisen bevorzugen. Mit einigen Tipps zur Nutzung und Reinigung kann man das Beste aus seinem Holzkohlegrill herausholen!\n\nVorteile und Nachteile von Elektrogrills:\n\nWenn es um das Grillen geht, denken die meisten Menschen zuerst an einen Holzkohle- oder Gasgrill. Aber in den letzten Jahren hat sich der Elektrogrill zu einer beliebten Alternative entwickelt. Einer der größten Vorteile von Elektrogrills ist, dass sie im Vergleich zu anderen Grills einfach zu bedienen sind. Sie benötigen kein Brennmaterial wie Gas oder Kohle, sondern werden einfach an eine Steckdose angeschlossen. Dies macht sie auch ideal für den Einsatz auf Balkonen oder in Wohngebieten, in denen offenes Feuer verboten ist.\n\nEin weiterer Vorteil des Elektrogrills ist die schnelle Aufheizzeit. Im Gegensatz zu Holzkohle- oder Gasgrills können sie innerhalb weniger Minuten betriebsbereit sein. Dies macht sie ideal für spontanes Grillen und das schnelle Zubereiten von Mahlzeiten. Auch wenn Elektrogrills normalerweise kleiner sind als andere Grills, sind sie leicht, kompakt und einfach zu verstauen.\n\nEs gibt jedoch auch Nachteile bei der Verwendung eines Elektrogrills. Eines davon ist die begrenzte Temperaturkontrolle im Vergleich zum Gas- oder Holzkohlegrill. Obwohl einige Modelle über verschiedene Heizeinstellungen verfügen können, bleiben die Temperaturen normalerweise nicht so hoch wie bei anderen Grills. Das bedeutet auch, dass es schwieriger ist, das charakteristische Grillaroma zu erreichen.\n\n\nWorauf beim Kauf achten?\n\nBevor du dich für einen bestimmten Elektrogrill entscheidest, solltest du verschiedene Modelle vergleichen und prüfen, welches am besten zu deinen Bedürfnissen passt. Überlege dir zunächst, welche Größe du benötigst. Ein kleiner Elektrogrill ist ideal für den Einsatz auf deinem Balkon oder einer kleinen Terrasse, während größere Modelle besser für Familien und größere Gruppen geeignet sind.\n\nBeachte auch die verschiedenen Funktionen und Features der Elektrogrills. Einige Modelle verfügen beispielsweise über eine regelbare Temperatursteuerung, abnehmbare Tropfschalen oder sogar eine integrierte rotierende Spießfunktion. Berücksichtige auch das Material des Grillrostes - Edelstahl ist langlebig und leicht zu reinigen.\n\nSchließlich solltest du auch dein Budget im Auge behalten. Die Preise für Elektrogrills variieren je nach Modell und Funktionen stark. Aber es ist wichtig sich daran zu erinnern, dass ein höherer Preis nicht immer gleichbedeutend mit einer besseren Qualität ist.\n\n\nTipps zur Nutzung und Reinigung:\n\nSobald du deinen Elektrogrill hast, möchtest du ihn wahrscheinlich schnell ausprobieren! Bevor du loslegst, solltest du jedoch einige Dinge beachten. Zunächst solltest du sicherstellen, dass der Grill vollständig aufgeheizt ist, bevor du anfängst zu grillen. Während dies bei anderen Grillarten wichtiger ist als bei einem Elektrogrill, kann das Vorheizen dazu beitragen sicherzustellen, dass dein Essen gleichmäßig gekocht wird.\n\nEine weitere Sache zu beachten ist die Verwendung von Grillutensilien aus Kunststoff oder Holz, anstatt von Metall. Dies verhindert Kratzer auf dem Grillrost, die das Grillen beeinträchtigen oder die Reinigung erschweren können.\n\nWenn es um die Reinigung geht, ist es am besten, deinen Elektrogrill nach jedem Gebrauch zu reinigen. Warte nicht zu lange oder das Fett und andere Rückstände können sich verkrusten und schwerer zu entfernen sein. Um deinen Elektrogrill zu reinigen, schalte ihn aus und warte bis er abgekühlt ist. Entferne dann den Grillrost und reinige ihn gründlich mit warmem Seifenwasser. Vermeide aggressive Reinigungsmittel oder Scheuerschwämme, da diese den Rost beschädigen könnten.\n\nInsgesamt kann der Elektrogrill eine großartige Option für alle sein, die auf der Suche nach einer einfachen und bequemen Art des Grillens sind. Indem du bei der Auswahl des richtigen Modells auf wichtige Kriterien achtest und ihn gut pflegst, wird dein Elektrogrill dir viele leckere Mahlzeiten bringen!\n\n<h2>Das perfekte Zubehör für den Grillabend</h2>\nGrillen bedeutet nicht nur Fleisch auf einer Flamme zu braten. Mit dem passenden Zubehör kann man ein BBQ in ein echtes Erlebnis verwandeln. Hier sind einige der wichtigsten Dinge, die man für den perfekten Grillabend benötigt.\n\n<h3>Grillbesteck</h3>\nOhne das richtige Grillbesteck kann man sich beim BBQ schnell die Finger verbrennen oder das Steak zerstören. Es lohnt sich, in hochwertiges Besteck zu investieren, das stabil und langlebig ist und über eine gute Griffigkeit verfügt. Ein Grundset sollte aus einer Zange, einem Wender und einem Pinsel bestehen. Einige Sets umfassen auch Spieße oder sogar eine Schere zum Schneiden von Fleisch.\n\n<h3>Grillthermometer</h3>\nEin gutes Grillthermometer ist unerlässlich, um sicherzustellen, dass das Fleisch auf den Punkt gegart wird. Es gibt verschiedene Arten von Thermometern: Digitale Modelle zeigen präzise Temperaturen an und können auch drahtlos mit einem Empfänger verbunden werden, während analoge Modelle oft einfacher zu verwenden sind und kein Batteriewechsel erfordern.\n\n<h3>Grillbürste</h3>\nUm den Grill sauber zu halten ist eine Bürste unerlässlich. Achte darauf, dass sie robust genug ist um Fett-und Rostablagerungen effektiv entfernen zu können aber gleichzeitig den Grillrost nicht beschädigt.\n\n\n<h2>Das beste Essen für ein BBQ: Die richtigen Zutaten </h2>\nEin BBQ ist nur so gut wie die Zutaten, die man verwendet. Es gibt einige Dinge, auf die man beim Einkauf von Fleisch und Gemüse achten sollte, um sicherzustellen, dass das BBQ ein Erfolg wird.\n\n<h3>Fleisch</h3>\nEs ist wichtig, in hochwertiges Fleisch zu investieren. Achte darauf, dass das Fleisch frisch ist und von hoher Qualität. Zum Beispiel sollten Rindersteaks mindestens 21 Tage gereift sein und Schweinefleisch sollte zart und saftig sein. Wenn du nicht sicher bist was du kaufen sollst frag den Metzger oder schau dir Bewertungen online an.\n\n<h3>Gemüse</h3>\nGemüse eignet sich hervorragend zum Grillen und kann sogar das Hauptgericht ersetzen. Wähle saisonales Gemüse aus um sicherzustellen, dass es frisch ist und seinen vollen Geschmack entfaltet hat. Paprika, Champignons oder Maiskolben sind beliebte Optionen.\n\n<h3>Marinaden & Gewürze</h3>\nEine gute Marinade verleiht dem Fleisch zusätzlichen Geschmack und macht es saftiger. Es gibt viele verschiedene Arten von Marinaden: süßliche mit Honig oder würzige mit Senf oder Chilipulver. Verwende auch Gewürze beim Grillen um dem Essen zusätzliche Aromen zu geben.\n\n\nEin gutes BBQ hängt von vielen Faktoren ab- der Auswahl des richtigen Grills bis hin zur Qualität der Zutaten . Mit dem richtigen Zubehör sowie den besten Zutaten kann man ein leckeres Essen mit Familie und Freunden genießen . Vergiss nicht, dass BBQ nicht nur um das Essen geht sondern auch um die Gesellschaft und das Zusammensein.\n\nZusammenfassung der Vor- und Nachteile der verschiedenen Grills\nWenn es um das Grillen geht, gibt es keine Antwort auf die Frage, welcher Grill der Beste ist. Die Auswahl des richtigen Grills hängt von deinen persönlichen Vorlieben ab. Gasgrills sind bekannt für ihre einfache Handhabung und ihre schnelle Aufheizzeit, während Holzkohlegrills für ihr intensives Aroma und den traditionellen Geschmack geliebt werden. Elektrogrills sind besonders praktisch für Innenräume oder für Orte, an denen offenes Feuer nicht erlaubt ist. Es gibt jedoch auch einige Nachteile bei jeder Art von Grill, die du berücksichtigen solltest.\n\nGasgrills sind oft teurer als Holzkohlegrills und benötigen regelmäßige Wartung sowie Gaskartuschen oder -flaschen. Holzkohlegrills benötigen Zeit zum Aufheizen und können schwieriger zu reinigen sein als andere Arten von Grills . Elektrogrills können weniger hitzeintensiv sein als Gas- oder Holzkohlegrills, was sich auf das Endergebnis auswirken kann.\n\nEntscheidungshilfe bei der Wahl des richtigen Grills\nEs gibt einige Faktoren zu berücksichtigen, wenn man den passenden Grill für sich selbst auswählen möchte:\n- Der Verwendungszweck: Bist du ein erfahrener Barbecue-Liebhaber oder bist du eher ein Gelegenheits-Griller? Benötigst du einen tragbaren Grill oder soll er im Garten stehen bleiben?\n- Die Anzahl der Personen: Wie viele Personen möchtest du gleichzeitig bewirten? \n- Die Verfügbarkeit von Brennstoffe: Gibt es eine Quelle für Gas oder Holzkohle in deiner Nähe? \n- Die Balkon- oder Gartenfläche: Wie viel Platz hast du für den Grill?\n\nInsgesamt ist es wichtig, dass man sich vor dem Kauf eines Grills genau überlegt, welche Art von Grill am besten zu den eigenen Bedürfnissen passt. Es lohnt sich, die Vor- und Nachteile der verschiedenen Grills zu vergleichen und sich Zeit zu nehmen, um die richtige Entscheidung zu treffen. Sobald du dich für einen Grill entschieden hast, solltest du ihn regelmäßig reinigen und warten, um sicherzustellen, dass er immer optimal funktioniert und köstliche Mahlzeiten zaubert. Genieße dein BBQ-Erlebnis!');

const handleData = async () => {
  text.value = 'Loading...';
  const textFromAPI = await $fetch<string>('/api/v1/article', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      topic: topic.value,
      tone: selectedOption.value,
    }),
  });

  text.value = textFromAPI;
};

const rendered = computed(() => markdown.render(text.value));

const wordCount = computed(() => getWordCount(text.value));

useHead({
  title: 'ArticleFy',
  meta: [
    {
      name: 'description',
      content: 'This is ArticleFy',
    },
  ],
});

</script>
