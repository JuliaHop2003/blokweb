# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
<summary>uitwerken voor kick-off werkgroep</summary>

### Auteur:
Julia Hop

#### Je startniveau:
Blauw

#### Je focus:
Surface
 
</details>





## Je website

<details open>
<summary>uitwerken voor kick-off werkgroep</summary>

### Je opdracht:
https://www.nike.com/nl

#### Screenshot(s) van de eerste pagina (small screen): 
Homepagina
<img src="images/homepagina.png" width="375px" alt="de homepagina van Nike">

#### Screenshot(s) van de tweede pagina (small screen):
Shoppagina
<img src="images/shop.png" width="375px" alt="de shoppagina van Nike">
 
</details>





## Breakdownschets (week 1)

<details>
<summary>uitwerken na afloop 2e werkgroep</summary>

### de hele pagina: 
<img src="images/breakdownSchets.jpg" width="375px" alt="breakdown van de hele pagina">

### dynamisch deel (bijv menu): 
<img src="images/menu.png" width="375px" alt="breakdown van een dynamisch deel">

### wellicht nog een dynamisch deel (bijv filter): 
<img src="images/zoeken.png" width="375px" alt="breakdown van nog een dynamisch deel">

</details>





## Voortgang 1 (week 2)

<details>
<summary>uitwerken voor 1e voortgang</summary>

### Stand van zaken
Lastig:
<img src="images/svg.jpeg" width="375px" alt="breakdown van nog een dynamisch deel">
Eerst wist ik niet hoe je svg-bestanden in Visual Code moest zetten, dus toen had ik de icons nagemaakt en als png-bestanden erin gezet. Maar in de werkgroep liet Sanne mij zien dat het helemaal niet lastig is, dus nu gebruik ik de officiële svg-bestanden van Nike.

Ook lukte mij eerst niet om een streepje onder het woord 'hier' te zetten, maar ook dat was makkelijk op te lossen door 'href "#"' achter de a tag te zetten. 

Goed:
<img src="images/foto.png" width="375px" alt="breakdown van nog een dynamisch deel">
Voor de rest ging alles goed. De html uit mijn breakdown schets klopte en ik heb de dezelfde foto's en font als van de Nike site.

### Agenda voor meeting
samen met je groepje opstellen

| student 1      | student 2          | student 3    | student 4        |
| ---            | ---                | ---          | ---              |
| dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
| en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
| ...            | ...                | ...          | ...              |

Dit hadden we niet gedaan.

### Verslag van meeting
hier na afloop snel de uitkomsten van de meeting vastleggen

- Gebruik svg in je html
- Vergeet geen href achter je a-tag te zetten
- Ga verder met je css

</details>





## Voortgang 2 (week 3)

<details>
<summary>uitwerken voor 2e voortgang</summary>

### Stand van zaken
<img src="images/voortgang2.png" alt="screenshot van voortgang 2">
Lastig: Tijdens voortgang 2 ging ik vragen hoe ik de volle breedte kreeg bij het grijze vak en hoe die tekst goed in het midden kwam, want daar kwam ik zelf niet uit.

Goed: Voor de rest ging alles nog goed en moest ik zelf verder gaan met coderen.

### Agenda voor meeting
samen met je groepje opstellen

| student 1      | student 2          | student 3    | student 4        |
| ---            | ---                | ---          | ---              |
| dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
| en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
| ...            | ...                | ...          | ...              |

Dit hadden we niet gedaan.

### Verslag van meeting
hier na afloop snel de uitkomsten van de meeting vastleggen

- Gebruik geen height, maar padding
- Ga verder met je code

</details>





## Toegankelijkheidstest (week 4)

<details>
<summary>uitwerken na test in 8e voortgang</summary>

### Bevindingen
Lijst met je bevindingen die in de test naar voren kwamen:
- Onder het kopje ‘gear up’ zijn de producten niet klikbaar.
- Op de Nike site zijn alle plaatjes klikbaar en bij mij nog niet allemaal.
- Ik heb nog geen hover state bij mijn buttons.
- Grotere lettertypes en een goed contrast helpen bij diverse beperkingen.
- Bij alle svg-afbeeldingen zei de screenreader dat het een ongelabelde afbeelding was.

#### Onklikbare plaatjes deel 1
Onder het kopje ‘gear up’ waren de producten niet klikbaar.

Maar toen ik keek in mijn html bleek dat ik geen href=’#’ in mijn code had gezet bij section 3.

#### Onklikbare plaatjes deel 2 
Ook kwam ik erachter dat op de Nike site alle plaatjes klikbaar zijn, maar bij mijn site nog niet alle.

Dus dat heb ik aangepast met href.

#### Geen hover state 
Ook had ik nog geen hover op mijn buttons.

Dus dat heb ik even toegepast tijdens de les.

#### Grotendeels beperking vriendelijk 
Kleurenblind: ✓
Low contest: X ‘Looks die je laten opvallen’ is slecht leesbaar - oplossing = beter contrast
Suikerziekte: ✓
Middenzichtverlies: X - oplossing = groter lettertype
Halfveldverlies: ✓
Perifere veldverlies: ✓
Vervagen: X - oplossing = groter lettertype
Spasmen/parkinson: ✓ Buttons zijn goed klikbaar
Afleiding: ✓

Grotere lettertypes en een goed contrast helpen bij diverse beperkingen.

#### Ongelabelde afbeeldingen 
Bij alle svg-afbeeldingen zei de screenreader dat het een ongelabelde afbeelding was.

Na wat gesurft te hebben op het internet kwam ik erachter dat je met titel=“ ”; ervoor kon zorgen dat de afbeelding gelabeld werd.
</details>





## Voortgang 3 (week 4)

<details>
<summary>uitwerken voor 3e voortgang</summary>

### Stand van zaken
Goed: Ik heb bijna helemaal mijn eerste pagina af. 

Lastig: Paar puntjes moeten nog op de i gezet worden.

### Agenda voor meeting
samen met je groepje opstellen

| student 1      | student 2          | student 3    | student 4        |
| ---            | ---                | ---          | ---              |
| dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
| en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
| ...            | ...                | ...          | ...              |

Dit hebben we niet gedaan.

### Verslag van meeting
hier na afloop snel de uitkomsten van de meeting vastleggen

- Om te kunnen sliden door de producten moet je in de ul scroll-snap-type: x mandatory; doen en in de li scroll-snap-align: center;
- Om a tags van elkaar te kunnen onderscheiden moet je not(:first-of-type) neerzetten.

</details>





## Eindgesprek (week 5)

<details>
<summary>uitwerken voor eindgesprek</summary>

### Stand van zaken
Goed: Ik vind dat mijn versie van de Nike website er heel erg goed op lijkt en er netjes/clean uitziet, dus ik ben erg tevreden en trots op het eindresultaat. Ook vind ik dat ik super veel heb geleerd tijdens dit vak. Ik begon met een laag niveau, want ik had vorig schooljaar een 5,5 voor internetstandaarden en een 5 voor programmeren. De opdrachten op codepen vond ik erg duidelijk uitgelegd en daardoor snapte ik wat ik moest doen en ze paste goed aan bij de eindopdracht. Ook heb ik super veel gehad aan de hulp van de studentassistenten, want ik liep best vaak tegen wat dingetjes aan en door te kijken hoe hun dat oplossen heb ik veel geleerd.
Heel misschien verwacht ik dat bij het eindgesprek wordt gezegd dat ik iets meer had moeten doen voor de surface, maar hier heb ik geen tijd meer voor en dit is het meeste code wat ik ooit heb geschreven :D

Lastig: Ik vond het lastig om individueel een uitshuifbaar menu te maken, dus dat heb ik samen met Rowin tijdens een call gedaan. Het eindresultaat zie je hieronder bij de screenshots.

### Screenshot(s)

Homepagina
<img src="images/eindresultaatHomepagina.png" width="375px" alt="screenshot van homepagina">

Menu
<img src="images/eindresultaatMenu.png" width="375px" alt="screenshot van menu">

Shoppagina
<img src="images/eindresultaatShoppagina.png" width="375px" alt="screenshot van shoppagina">

</details>





## Herkansing

<details>

### Stand van zaken

Uit het eindgesprek kwam dat ik de volgende dingen moest verbeteren:
- Plaatje moet meeschalen van 320 px tot 540 px
- Alle sections moeten een titel krijgen (aria label) op regel 90
- Regel 78 moet een linkje (a) worden
- Weg trail atletiekbaan lijstje met label op regel 83
- Namen met betekenis, dus geen row en column
- p weg en een normaal woord neerzetten op regel 163
- svg in p tag op regel 199
- Alle kleuren bovenaan zetten
- 5 surface dingen

Mijn 5 (eigenlijk 6) surface planes:
1. Dark/light mode
2. SVG stylen en animeren
3. DOM manipulatie
4. Advanced positioning
5. Custom properties++
6. Animaties

### Screenshot(s)
Homepagina light mode
<img src="images/eindresultaatHomepaginaHerkansing.png" width="375px" alt="screenshot van homepagina in lightmode">

Homepagina dark mode
<img src="images/eindresultaatHomepaginaHerkansingDarkMode.png" width="375px" alt="screenshot van homepagina in darkmode">

Menu light mode
<img src="images/eindresultaatMenuHerkansing.png" width="375px" alt="screenshot van menu in lightmode">

Menu darkmode mode
<img src="images/eindresultaatMenuHerkansingDarkMode.png" width="375px" alt="screenshot van menu in darkmode">

Shoppagina lightmode
<img src="images/eindresultaatShoppaginaHerkansing.png" width="375px" alt="screenshot van shoppagina in ligtmode">

Shoppagina darkmode
<img src="images/eindresultaatShoppaginaHerkansingDarkMode.png" width="375px" alt="screenshot van shoppagina in darkmode">

De vormgeving is bijna hetzelfde als eerst. 

De verbeteringen zijn:
- Responsive maken van 320 tot 540 px
- Html fixen
- 5 punten uit de surface lijst

</details>





## Bronnenlijst

<details open>

1. https://css-tricks.com/snippets/css/a-guide-to-flexbox/
2. Studentassistenten Rowin Schmidt & Younes Emre Alkan
3. Docent Sanne 't Hooft
4. Huiswerkopdrachten (codepen)

</details>