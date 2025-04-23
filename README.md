# API @cmda-minor-web 2024 - 2025
Het web is een geweldige plek en de beschikbare technologieën ervan zijn vandaag de dag krachtiger dan ooit tevoren.
De kracht van het web ligt in het feit dat het een platform is dat voor iedereen beschikbaar is en dat het gebaseerd is
op open standaarden. De technologieën worden ontworpen en gespecificeerd op basis van consensus en zijn niet in handen
van één enkele entiteit.

Desondanks zijn er veel mensen en bedrijven die vinden dat het internet niet voldoet aan hun behoeften. Dit blijkt uit
de pogingen van grote techbedrijven om hun eigen afgesloten ecosystemen te creëren. Ze streven hiermee naar controle over
zowel de gebruikerservaring als de gegenereerde data.

**In dit vier weken durende vak zullen we de kracht van het web ervaren en kijken hoe we (mobiele) web apps kunnen maken die
net zo aantrekkelijk zijn als native mobiele apps. We beginnen met het maken van een server-side gerenderde applicatie
waarbij we geleidelijk de gebruikerservaring verbeteren met relevante beschikbare web API's.**

[TLDR; hoe zet ik mijn project op?](#Inrichten-ontwikkelomgeving)

## Doelen

Na deze cursus zul je:

- In staat zijn om een server-side gerenderde applicatie te maken.
- In staat zijn om een enerverende gebruikerservaring te creëren.
- Een breder begrip hebben van het web en zijn mogelijkheden.

## Opdracht

In dit vak zullen we een van de meest voorkomende app-concepten van vandaag
gebruiken en ontdekken dat we deze kunnen maken met moderne webtechnologie
met als doel om een rijke gebruikerservaring creëeren.

Randvoorwaarden:

- Minimaal een overzichts- en detailpagina
- Gebouwd in TinyHTTP + Liquid
- Minimaal een content API
- Minimaal twee Web API's

Voorbeelden:

- Maak je eigen streamingplatform (Netflix/Spotify).
- Maak je eigen doom-scroll-app (Instagram/TikTok).
- Maak je eigen chatapplicatie (WhatsApp/Signal).
- Een andere app die je zelf leuk vindt...

Voorbeeld content API's die je kan gebruiken:

- [MovieDB API](https://developer.themoviedb.org/reference/intro/getting-started)
- [Rijksmuseum API](https://data.rijksmuseum.nl/object-metadata/api/)
- [Spotify API](https://developer.spotify.com/documentation/web-api)
- ...

Voorbeelden van Web API's die je kan gebruiken:

- [Page Transition API voor animaties tusse npagina's](https://developer.mozilla.org/en-US/docs/Web/API/Page_Transitions_API)
- [Web Animations API voor complexe animaties](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)
- [Service Worker API voor installable web apps](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
- [Web Push API voor push notifications](https://developer.mozilla.org/en-US/docs/Web/API/Push_API)
- [Server sent events voor realtime functionaliteit](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events)
- [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
- [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
- [Web Share API voor sharen van content binnen de context van de gebruiker](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share)
- ...

De lijst is eindeloos, laat je vooral inspireren op de overzichtspagina van [MDN](https://developer.mozilla.org/en-US/docs/Web/API).

## Beoordeling
De beoordelingscriteria zijn te vinden op [DLO](https://dlo.mijnhva.nl/d2l/le/content/609470/Home)

## Planning

| Planning                   | Maandag               | Dinsdag            | Vrijdag                                     |
|----------------------------|-----------------------|--------------------|---------------------------------------------|
| Week 1 - Kickoff & concept | Introductie ne uitleg | Workshops          | Feedback gesprekken                         |
| Week 2 - The baseline      | College + workshops   | Workshops          | Feedback gesprekken                         |
| Week 3 - Enhance           | College + workshops   | Workshops          | Feedback gesprekken(*DONDERDAG*)            |
| Week 4 - Enhance & wrap up | Tweede paasdag        | Individuele vragen | Beoordelingsgesprekken(*DONDERDAG/VRIJDAG*) |

## Bronnen

- [Nodejs.org](https://nodejs.org/en/), voor de installatie van NodeJS op jouw systeem, kies voor NodeJS 22.13.1 Long Term Support. Dit is de meest stabiele versie van NodeJS, welke ondersteund wordt met goede documentatie.
- [VSCode How To Open Terminal](https://www.youtube.com/watch?v=OmQhOnBzg_k), om iemand de terminal te zien openen en gebruiken op Youtube.
- [Introduction to NodeJS](https://nodejs.dev/en/learn/), voor een in depth introductie met de NodeJS ontwikkelomgeving. Let op: dit is best een technisch verhaal. De eerste zes pagina’s zijn interessant.
- Om serverside te kunnen renderen maken we gebruik van [TinyHttp](https://github.com/tinyhttp).
- Voor templating maken we gebruik van [LiquidJS](https://liquidjs.com/).
- [Liquid Filters](https://liquidjs.com/filters/overview.html)
- Voor build tooling(CSS en JS) maken we gebruik [Vite](https://vitejs.dev/).
- [Using the Fetch API @ MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [JSON.parse() @ MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
- [Partial commits in GitHub Desktop](https://github.blog/news-insights/product-news/partial-commits-in-github-for-windows/)
- [Committing and reviewing changes to your project in GitHub Desktop](https://docs.github.com/en/desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project-in-github-desktop)

## Inrichten ontwikkelomgeving

1. Navigeer naar [nodejs.org](https://nodejs.org/en/) en installeer de NodeJS ontwikkelomgeving. Kies voor _NodeJS 22.13.1 with long-term support_, download de benodigde bestanden en doorloop het installatieproces.

2. Fork daarna [deze repository](https://github.com/cmda-minor-web/API-2425) en *clone* deze op jouw computer.

3. Open deze repository in je code editor.

4. Open de _Terminal_ in Visual Studio Code door de toetscombinatie `` ^` `` (control + `) te gebruiken. Er opent een terminalscherm in de hoofdmap van jouw project.

5. Voer in de terminal het commando `npm install` uit, door het in te typen en op enter te drukken. Je gebruikt _NPM_, de _NodeJS Package Manager_ om alle _afhankelijkheden_ voor dit project te installeren. NPM is een veelgebruikte package manager in frontend land. Voor dit project gebruiken we _TinyHTTP_ (om een _server_ te maken) en _Liquid_ (om HTML te _renderen_).
- (Optioneel) Na de installatie is de map `node_modules` aangemaakt, en gevuld met allerlei _packages_. Scroll eens door deze map heen; vele honderden *open source* ontwikkelaars hebben de packages die je ziet gebouwd en die mag je gratis gebruiken. Ontwikkelen in NodeJS is *standing on the shoulders of giants*.

### Project starten en stoppen
Start het voorbeeldproject op door in de terminal het commando `npm run dev` uit te voeren. Als het goed is, komt een melding te staan over het opstarten van de server: `Server available on http://localhost:3000` — Open deze URL in je browser. Let op: Vite draait op een andere poort dan TinyHTTP, dus je moet de poort van TinyHTTP gebruiken: http://localhost:3000

Als het werkt, zet je je server weer uit door in de terminal de toetscombinatie `^c` (control + c) in te voeren. Deze toetsencombinatie wordt in de terminal gebruikt om de huidige taak te stoppen en *controle* (vandaar de c) terug te krijgen van het programma.

- Optioneel: Volg het [NodeJS ‘Hello World’ voorbeeld](https://medium.com/@mohammedijas/hello-world-in-node-js-b333275ddc89)
- Optioneel, iets technischer: Lees de eerste vijf delen van [Introduction to Node](https://nodejs.dev/en/learn/) als je een meer in-depth introductie wilt met de NodeJS ontwikkelomgeving.


**READ ME VAN LILIAN**

De opdracht:

Met dit vak is het de bedoeling om kennis te maken met meerdere dingen zoals Note en liquid. Ook moet de website informatie uit een api gebruiken. Dit heb ik dus ook gedaan.

*WEEK 1*

In week 1 was ik helaas ziek, ik had me wel verdiepd in de opdracht en met Cyd contact op genomen om mijn idee te pitchen. Ik ging eerst kijken naar wat voor een api's er allemaal te vinden waren en ik vond al snel een api over maaltijden. Ik heb zelf vaak het probleem dat ik niet weet wat ik moet eten en vond dit een perfect idee voor mijn opdracht. Ik had een schets gemaakt en die uiteindelijk dus ook uitgewerkt. Mijn concrete idee is een meal generator geworden waar mensen kunnen kiezen of ze bijvoorbeeld vlees, vis of vega maaltijden willen eten. Met de TheMeal api komen deze maaltijden er dan in. 
Hieronder mijn eerste schetsen.

<img src="/client/images/eersteschets.HEIC" alt="eerste schets">

*WEEK 2*

In week 2 ging ik van start met mijn design en de eerste opbouw van de website. Omdat ik design heel leuk vind wou ik graag dat de website er mooi uitging zien. Mijn eerste idee had een functie erin dat mensen konden selecteren wat ze al in de koelkast hadden en dat de website dan recepten erbij zoekt die dat ingredient bevatte. Als ik langer dan 4 weken had is dat een functie die ik er graag nog bij had willen doen. Voor nu ging ik onderzoek doen naar wat voor een informatie er allemaal in de api zat. Ik kwam erachter dat je kon filteren op main ingredient en category. Als eerst had ik de main ingredient gebruikt voor het filteren alleen kwam ik erachter dat je wel op chicken-breast, salmon, en beef kon filteren maar niet op hele categorien. Daarom ben ik geswitcht naar de categorien zodat ik het beter kan indelen in dingen zoals vis, meat, vega enzv. Samen met Cyd heb ik gekeken naar hoe ik de api in de website moest krijgen en dat is gelukt voorderest had ik nog niet veel aan styling gedaan.

<img src="/client/images/schets2.png" alt="eerste designs">
Experimenteren met design en kleur.

<img src="/client/images/schets3.png" alt="tweede designs">
Uiteindelijke design.

*WEEK 3*

In week 3 ben ik verder gegaan met het uitwerken van de website. Ik heb me vooral gefocust op de styling, omdat ik wilde dat de website er mooi en netjes uitziet. Ik heb kleuren en typografie toegepast die passen bij het design en ervoor gezorgd dat de layout overzichtelijk blijft. Daarnaast heb ik ervoor gezorgd dat de keuzes in het formulier radiobuttons werden, zodat gebruikers makkelijk een categorie kunnen selecteren. Ik heb JavaScript toegevoegd om ervoor te zorgen dat de submit-knop pas actief wordt als er een keuze is gemaakt, wat de gebruiksvriendelijkheid verder verbeterde.
Ook heb ik deze week een gesprek gehad met Declan. Hij gaf me feedback dat ik mijn code beter moet begrijpen en niet zomaar dingen erin moet stoppen zonder te weten hoe ze werken. Dit heeft me geholpen om meer aandacht te besteden aan het begrijpen van de code en het allemaal even goed langs te gaan.


*WEEK 4*

In week 4 heb ik de laatste dingen aan mijn website toegevoegd en alles netjes afgerond. Ik heb de View Transition API toegevoegd, zodat de overgangen tussen pagina's veel soepeler en mooier zijn. Dit maakt de website echt een stuk fijner om te gebruiken. Daarnaast heb ik nog eens goed naar mijn code gekeken en alles opgeschoond. Ik wilde zeker weten dat alles logisch in elkaar zit en dat er geen rommelige stukken code meer in staan.

Ook heb ik mijn project online gezet met Render, zodat anderen mijn website kunnen bekijken. Dit was even een uitdaging, maar uiteindelijk is het gelukt! Het was fijn om mijn project in een live omgeving te zien werken en om te testen of alles goed functioneert. Ik ben blij met hoe alles is geworden en trots op wat ik in deze weken heb bereikt.

*CONCLUSIE*

De afgelopen weken heb heel veel geleerd over api's en wat je er allemaal mee kan. Ik vond het eerst heel moeilijk omdat ik er vrijwel geen ervaring mee had. Ook werken met liquid en node was iets wat ik nog nooit had gedaan. Uiteindelijk ben ik blij met mijn eindresultaat, als we nog meer tijd hadden had ik graag nog een functie toegevoegd waar de gebruiker alle dingen uit zijn/haar koelkast erin had kunnen zitten maar daar had ik helaas geen tijd voor. Ik heb mijn best gedaan om de code iets beter te begrijpen ookal vind ik dit nogsteeds wel lastig. Ik ben wel blij dat ik merk dat het realiseren van mijn ontwerpen mij steeds beter afgaat met CSS enzv. Uiteindelijk vond ik het best een uitdagend vak maar vond ik het wel intrerresant om over te leren. Ik ben best trots over hoeveel meer kennis ik over de api's heb.


link naar mijn render: 
https://api-2425-6w8e.onrender.com

