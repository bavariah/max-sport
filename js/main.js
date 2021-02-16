!function(){"use strict";function o(){var o=window,t=document;if(!("scrollBehavior"in t.documentElement.style&&!0!==o.__forceSmoothScrollPolyfill__)){var l,e=o.HTMLElement||o.Element,r=468,i={scroll:o.scroll||o.scrollTo,scrollBy:o.scrollBy,elementScroll:e.prototype.scroll||n,scrollIntoView:e.prototype.scrollIntoView},s=o.performance&&o.performance.now?o.performance.now.bind(o.performance):Date.now,c=(l=o.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(l)?1:0);o.scroll=o.scrollTo=function(){void 0!==arguments[0]&&(!0!==f(arguments[0])?h.call(o,t.body,void 0!==arguments[0].left?~~arguments[0].left:o.scrollX||o.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:o.scrollY||o.pageYOffset):i.scroll.call(o,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:o.scrollX||o.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:o.scrollY||o.pageYOffset))},o.scrollBy=function(){void 0!==arguments[0]&&(f(arguments[0])?i.scrollBy.call(o,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):h.call(o,t.body,~~arguments[0].left+(o.scrollX||o.pageXOffset),~~arguments[0].top+(o.scrollY||o.pageYOffset)))},e.prototype.scroll=e.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==f(arguments[0])){var o=arguments[0].left,t=arguments[0].top;h.call(this,this,void 0===o?this.scrollLeft:~~o,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},e.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==f(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},e.prototype.scrollIntoView=function(){if(!0!==f(arguments[0])){var l=function(o){for(;o!==t.body&&!1===(e=p(l=o,"Y")&&a(l,"Y"),r=p(l,"X")&&a(l,"X"),e||r);)o=o.parentNode||o.host;var l,e,r;return o}(this),e=l.getBoundingClientRect(),r=this.getBoundingClientRect();l!==t.body?(h.call(this,l,l.scrollLeft+r.left-e.left,l.scrollTop+r.top-e.top),"fixed"!==o.getComputedStyle(l).position&&o.scrollBy({left:e.left,top:e.top,behavior:"smooth"})):o.scrollBy({left:r.left,top:r.top,behavior:"smooth"})}else i.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function n(o,t){this.scrollLeft=o,this.scrollTop=t}function f(o){if(null===o||"object"!=typeof o||void 0===o.behavior||"auto"===o.behavior||"instant"===o.behavior)return!0;if("object"==typeof o&&"smooth"===o.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+o.behavior+" is not a valid value for enumeration ScrollBehavior.")}function p(o,t){return"Y"===t?o.clientHeight+c<o.scrollHeight:"X"===t?o.clientWidth+c<o.scrollWidth:void 0}function a(t,l){var e=o.getComputedStyle(t,null)["overflow"+l];return"auto"===e||"scroll"===e}function d(t){var l,e,i,c,n=(s()-t.startTime)/r;c=n=n>1?1:n,l=.5*(1-Math.cos(Math.PI*c)),e=t.startX+(t.x-t.startX)*l,i=t.startY+(t.y-t.startY)*l,t.method.call(t.scrollable,e,i),e===t.x&&i===t.y||o.requestAnimationFrame(d.bind(o,t))}function h(l,e,r){var c,f,p,a,h=s();l===t.body?(c=o,f=o.scrollX||o.pageXOffset,p=o.scrollY||o.pageYOffset,a=i.scroll):(c=l,f=l.scrollLeft,p=l.scrollTop,a=n),d({scrollable:c,method:a,startTime:h,startX:f,startY:p,x:e,y:r})}}"object"==typeof exports&&"undefined"!=typeof module?module.exports={polyfill:o}:o()}();

// make sure sw are supp

if('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
    .register('../sw_cached_pages.js')
    .then(reg => console.log('service worker reg'))
    .catch(err => console.log(`service worker: error: ${err}`))
  })
}


const menu = [
  {
    id: 1,
    title: "Leg curl - bench klupa",
    link: "../sprave-za-vezbanje/leg-curl-bench-klupa.html",
    category: "sprave",
    price: 150,
    img: "../props/sprave/legcurl5.jpg",
    desc: `Opcije:<br> 1. Moze se skinuti nastavak za noge i ubaciti skot nastavak. <br>
    2. Bez nastavaka je kao univerzalna bench klupa.<br><br> Po želji boja metala/kože.
    `,
  },
  {
    id: 2,
    title: "Profesionalna klupa",
    link: "../sprave-za-vezbanje/profesionalna-klupa.html",
    category: "klupe",
    price: 122,
    img: "../props/klupe/klupa_koso.jpg",
    desc: `1. Profesionalna klupa multifunkcionalna ( 8 polozaja naslon, i 4 polozaja malo sediste)
    Ravan polozaj, kosi polozaji i pod 90°<br>
    2. Stalak za ramena, kosi bench, ravan bench - podesiv po sirini + nosaci za tegove<br><br> Po želji boja metala/kože.`,
  },
  {
    id: 3,
    title: "Dodaci za Univerzalnu Spravu",
    link: "../sprave-za-vezbanje/multi-funkcionalna-dodaci.html",
    category: "sprave",
    price: 150,
    img: "../props/multi_plus/multi5.jpg",
    desc: `Dodaci za MultiFunkcionalnu Spravu.<br><br> Po želji boja metala/kože.
    `,
  },
  {
    id: 4,
    title: "Univerzalna Klupa",
    link: "../sprave-za-vezbanje/univerzalna-klupa.html",
    category: "klupe",
    price: 122,
    img: "../props/klupe/univerz6.jpg",
    desc: `Univerzalna bench klupa 6 položaja<br><br> Po želji boja metala/kože.`,
  },
  // {
  //   id: 5,
  //   title: "fitnes",
  //   link: "#",
  //   category: "fitnes",
  //   price: 123,
  //   img: "../props/test.jpg",
  //   desc: `1. Half Rack 2 PROFESIONALNI - 375 eura
  //   2. Univerzalna bench klupa PROFESIONALNA - 170 eura
  //   4. Bucice sa navojima 35cm duzine - 2000din/kom
  //   5. Bucice sa navojima 38cm duzine - 2200din/kom`,
  // },
   {
     id: 5,
     title: "set-komplet",
     link: "../sprave-za-vezbanje/set-komplet.html",
     category: "komplet",
     price: 123,
     img: "../props/komplet/komplet1.jpg",
     desc: `Komplet sprava`,
   },
  {
    id: 6,
    title: "Bokserski džakovi",
    link: "../sprave-za-vezbanje/bokserski-dzakovi.html",
    category: "box",
    price: 123,
    img: "../props/box/dzakovi.jpg",
    desc: `Profi džakovi od: 100cm, 120cm, 150cm, 180cm. Džakovi su kvalitetni i kvalitetna je cerada iz uvoza, kao i šivenje. Uz džak dobijate karabiner da zakačite džak. Imam svoju proizvodnju i džakova i sprava, tako da i držač možete da poručite od mene, i dužinu držača i da bude za zid ili plafon. Može odabir boje metala i boja cerade`,
  },
  // {
  //   id: 7,
  //   title: "Stalak",
  //   link: "../sprave-za-vezbanje/stalak-gym.html",
  //   category: "stalci",
  //   price: 123,
  //   img: "../props/stalci/stalak4.jpg",
  //   desc: `Stalak za čučanj, ramena, kosi bench, ravan bench, kontra kosi bench, + nosači za tegove`,
  // },
  {
    id: 8,
    title: "Olimpijske šipke i bučice fi50mm",
    link: "../sprave-za-vezbanje/sipke-bucice-fi50mm.html",
    category: "sipke",
    price: 144,
    img: "../props/sipke/olimp_sipka_3.jpg",
    desc: `1. Olimpijska šipka fi50mm 220cm dužina<br>
    2. Bučice fi50mm sa navojem`,
  },
  {
  id: 9,
    title: "Zidno Vratilo",
    link: "../sprave-za-vezbanje/zidno-vratilo.html",
    category: "vratila",
    price: 150,
    img: "../props/zidni/v2.jpg",
    desc: `Zidno vratilo, veoma čvrsto i kvalitetno odrađeno, uski hvat 55cm a siroki 110cm, ručice sa strane su blago povijene na dole, ručice su obložene original sunđerastom ručkom.
    `,
  },
  {
  id: 10,
    title: "Zidni razboj za propadanje i trbušnjake",
    link: "../sprave-za-vezbanje/zidni-razboj.html",
    category: "vratila",
    price: 150,
    img: "../props/zidni/p2.jpg",
    desc: `Razboj za propadanja i stomak, sirina hvata je 55cm. rucice su oblozenje sundjerastom ruckom.
    Uz razboj dobijate tiple i šrafove
    `,
  },
  {
  id: 11,
    title: "Sprave za zgibove, trbušnjake i propadanja",
    link: "../sprave-za-vezbanje/zidni-multi-set.html",
    category: "vratila",
    price: 150,
    img: "../props/zidni/mix1.jpg",
    desc: `Set zidni razboj i vratilo za trbušnjake, propadanja i zgibove.<br><br> Po želji boja metala/kože.
    `,
  },
  {
    id: 12,
    title: "Hiperekstenzija",
    link: "../sprave-za-vezbanje/hiperextenzija.html",
    category: "klupe",
    price: 150,
    img: "../props/extenzija/ex2.jpg",
    desc: `Sprava za vežbanje donjeg dela leđa ( hiperekstenzija ) izradjena od profila 60x40 i 40x40, jaka i stabilna, ima podešavanje po visini vežbovnog dela kao i podešavanje po visini dela za noge.  <br><br> Po želji boja metala/kože.
    `,
  },
  // {
  //   id: 13,
  //   title: "Klupa za trbušnjake",
  //   link: "../sprave-za-vezbanje/klupa-za-trbusnjake.html",
  //   category: "klupe",
  //   price: 122,
  //   img: "../props/trbuh/trbuh1.jpg",
  //   desc: `Klupa za trbušnjake.<br><br> Po želji boja metala/kože.`,
  // },
  {
    id: 14,
    title: "Vratilo samostojeće (POWER TOWER)",
    link: "../sprave-za-vezbanje/multi-funkcionalna-sprava.html",
    category: "gladijatori",
    price: 150,
    img: "../props/multi_plain/multi5.jpg",
    desc: `Vratilo samostojeće (Power Tower) izrađeno od profila 60x40, jaka, masivna i teška sprava, jako stabilna, uski hvat je 55cm a široki hvat je 110cm, ima i ručke za sklekove, sve ručice su oblozene sunđerastom ručkom..<br><br> Po želji boja metala/kože.
    `,
  },
  {
    id: 15,
    title: "šipke i bučice sa štipaljkama fi30mm",
    link: "../sprave-za-vezbanje/sipke-bucice-stipaljke-fi30mm.html",
    category: "sipke",
    price: 144,
    img: "../props/sipke/sipke_1.jpg",
    desc: `1. Šipka fi30mm <br>
    2. Bučice fi30mm sa štipaljkom`,
  },
  {
    id: 16,
    title: "Profesionalni Half rack",
    link: "../sprave-za-vezbanje/profesionalni-half-rack.html",
    category: "gladijatori",
    price: 150,
    img: "../props/multi_extreme/multi5.jpg",
    desc: `Profesionalni Half rack za kucne i komercijalne teretane.                                                                                
    Izradjen od profila 50x50x3mm, I 60x40x3mm, veoma cvrst, masivan i stabilan, flahovi debljine 5mm.
    Dobijaju se nastavci za sipku, duzi nastavci za sipku ( mrtvo dizanje ili sigurnosni nosaci ) i nastavci za propadanje.  
    Nastavci su brzomontirajuci, i uz njih dobijate i srafove.
    `,
  },
  {
    id: 17,
    title: "Bench klupa",
    link: "../sprave-za-vezbanje/bench-klupa.html",
    category: "klupe",
    price: 122,
    img: "../props/bench/bench1.jpg",
    desc: `Univerzalna bench klupa sa stalkom za šipku, mogućnost dodavanja skot nastavka i nastavaka za prednju i zadnju ložu<br><br> Po želji boja metala/kože.`,
  },
  {
    id: 18,
    title: "Skot klupa",
    link: "../sprave-za-vezbanje/skot-klupa.html",
    category: "klupe",
    price: 150,
    img: "../props/skot_klupa/bicepsi2.jpg",
    desc: `Skot klupa pod uglom od 45 stepeni, jaka i stabilna, skot ima 3 položaja visine, sedište 3 položaja. Po želji boja metala i eko kože..
    `,
  },
  {
    id: 19,
    title: "3D zglob fi30 i fi50",
    link: "../sprave-za-vezbanje/3D-zglob.html",
    category: "sprave",
    price: 123,
    img: "../props/drzac_za_sipku/drzac1.jpg",
    desc: `3D zglob za šipke`,
  },
  {
    id: 20,
    title: "Stalak za tegove i šipke fi30 i fi50",
    link: "../sprave-za-vezbanje/stalak-za-tegove.html",
    category: "stalci",
    price: 123,
    img: "../props/stalak_za_tegove/stalak4.jpg",
    desc: `Stalak za tegove i šipke`,
  },
  {
    id: 21,
    title: "Dodatak za sklekove",
    link: "../sprave-za-vezbanje/dodatak-za-sklekove.html",
    category: "sprave",
    price: 123,
    img: "../props/sklekovi/sklek1.jpg",
    desc: `Dodatak za sklekove`,
  },
  {
    id: 22,
    title: "Trap bar, hex bar šipka",
    link: "../sprave-za-vezbanje/hex-trap-sipka.html",
    category: "sipke",
    price: 144,
    img: "../props/hex/hex1.jpg",
    desc: `Trap bar, hex bar šipka fi30 i fi50`,
  },
  // {
  //   id: 23,
  //   title: "EZ šipka",
  //   link: "../sprave-za-vezbanje/ez-sipka.html",
  //   category: "sipke",
  //   price: 144,
  //   img: "../props/sipke/ez1.jpg",
  //   desc: `EZ šipka`,
  // },
  {
    id: 24,
    title: "tegovi fi30 i fi50",
    link: "../sprave-za-vezbanje/tegovi.html",
    category: "tegovi",
    price: 111,
    img: "../props/tegovi/t2.jpg",
    desc: `Tegovi fi30mm i fi50mm: 1,25kg; 2,5kg; 5kg; 10kg; 15kg; 20kg`,
  },
  {
    id: 25,
    title: "Stalak za bučice",
    link: "../sprave-za-vezbanje/stalak-za-bucice.html",
    category: "stalci",
    price: 123,
    img: "../props/tegovi/polica4.jpg",
    desc: `Stalak za bučice - ČVRSTE KONSTRUKCIJE, MODERAN DIZAJN`,
  },
  {
    id: 26,
    title: "Stalak za hex bučice",
    link: "../sprave-za-vezbanje/stalak-za-hex-bucice.html",
    category: "stalci",
    price: 123,
    img: "../props/tegovi/drzac4.jpg",
    desc: `Stalak za hex bučice, 1-10kg`,
  },
  {
    id: 27,
    title: "zidni NOSAČI ZA BOKS DŽAK",
    link: "../sprave-za-vezbanje/zidni-nosac-za-boks-dzak.html",
    category: "box",
    price: 123,
    img: "../props/dzak_dodatak/dzak4.jpg",
    desc: `Zidni držač(nosac) za boks  džak (kik boks), izrada po zelji kupca.
    Uz držač  dobijate tiple i srafove.`,
  },
  {
    id: 28,
    title: "Dodaci sprava",
    link: "../sprave-za-vezbanje/dodatak-za-sprave.html",
    category: "sprave",
    price: 123,
    img: "../props/ostalo/dodaci1.jpg",
    desc: `Jednorucni kanap za triceps, 
    Dvorucni kanap za triceps, 
    Triceps press nastavak, 
    Uski paralelni hvat, 
    Jednorucni nastavak, 
    Kriva sipka za cross masinu, 
    Sipka lat , 
    Kriva sipka za lat, 
    Nastavak nogu za primicanje, 
    Pojas za opterecenje, 
    Skot nastavak, 
    Nastavak za prednju i zadnju lozu`,
  },
  {
    id: 29,
    title: "bučice",
    link: "../sprave-za-vezbanje/bucice.html",
    category: "sipke",
    price: 111,
    img: "../props/tegovi/bucice4.jpg",
    desc: `Bučice svih veličina/težina`,
  },
  {
    id: 30,
    title: "Rusko zvono - girje",
    link: "../sprave-za-vezbanje/rusko-zvono.html",
    category: "tegovi",
    price: 111,
    img: "../props/rusko/r1.jpg",
    desc: `Rusko Zvono, girje, kettlebell od: 4kg, 8kg, 12kg, 16kg, 20kg, 24kg`,
  },
  {
    id: 31,
    title: "Bumper tegovi",
    link: "../sprave-za-vezbanje/bumper-tegovi.html",
    category: "tegovi",
    price: 111,
    img: "../props/bumper/bumper1.png",
    desc: `Nema čelika nego su od gume i pogodni su za kućne varijante jer prilikom padanja, bacanja ne oštećuju pod.
    Ploče su od : 5kg; 10kg; 15kg; 20kg`,
  },
  {
    id: 32,
    title: " hex bučice",
    link: "../sprave-za-vezbanje/hex-bucice.html",
    category: "sipke",
    price: 111,
    img: "../props/tegovi/hex1.jpg",
    desc: `Bučice od 1-10kg`,
  },
  {
    id: 33,
    title: "Ravna klupa",
    link: "../sprave-za-vezbanje/ravna-klupa.html",
    category: "klupe",
    price: 122,
    img: "../props/klupe/ravna1.jpg",
    desc: `Ravna klupa veoma jaka i stabilna, izradjena od profila 60x40, duzine 110cm. Po želji boja metala/kože.`,
  },
  {
    id: 34,
    title: "Profesionalna Univerzalna Klupa",
    link: "../sprave-za-vezbanje/profesionalna-univerzalna-klupa.html",
    category: "klupe",
    price: 122,
    img: "../props/klupe/pro4.jpg",
    desc: `Profesionalna univerzalna bench klupa izrađena od profila 80x40 (3mm debljina zida), veoma jaka, stabilna i masivna, klupa ima 5 položaja (  ravni, 3 kosa, i pod 90 stepeni ), sedište podesivo u 3 položaja<br><br> Po želji boja metala/kože.`,
  },
  {
    id: 35,
    title: "Hiperekstenzija (sklopiva)",
    link: "../sprave-za-vezbanje/hiperextenzija-sklopiva.html",
    category: "klupe",
    price: 150,
    img: "../props/extenzija/sklopiva1.jpg",
    desc: `Hiperextenzija(sklopiva) voma čvrsta i stabilna, lepog i udobnog dizajna, dole ima gumene navlake protiv klizanja. 

    Podesava se prema visini vezbača, izvlaci se ili uvlaci da bi bila visa ili niza u zavisnosti od vezbača.<br><br> Po želji boja metala/kože.
    `,
  },
  {
    id: 36,
    title: "Klupa za trbušnjake (sklopiva)",
    link: "../sprave-za-vezbanje/klupa-za-trbusnjake-sklopiva.html",
    category: "klupe",
    price: 122,
    img: "../props/trbuh/trbuh34.jpg",
    desc: `Klupa za trbusnjake (sklopiva) veoma čvrsta i stabilna, lepog i udobnog dizajna, dole ima gumene navlake protiv klizanja. 

    Podešava se nagib, izvlači se ili uvlači da bi bila viša ili niža u zavisnosti kakvo opterećenje želite da vam bude prilikom vežbanja.<br><br> Po želji boja metala/kože.`,
  },
  {
    id: 37,
    title: "Profesionalni Leg Press i Hek Mašina",
    link: "../sprave-za-vezbanje/leg-press.html",
    category: "sprave",
    price: 150,
    img: "../props/sprave/leg2.jpg",
    desc: `Dve sprave u jednoj (2u1), za kućne i komercijalne teretane. Mogućnost prilagođavanja sprave iz Leg pressa u Hek mašinu u dva poteza, 
    Izradjen od debelozidnih cevi 3mm...<br><br> Po želji boja metala/kože.
    `,
  },
  {
    id: 38,
    title: "Trap bar, hex bar šipka (pokretne ručke)",
    link: "../sprave-za-vezbanje/hex-trap-pokretne-rucke.html",
    category: "sipke",
    price: 144,
    img: "../props/hex/h1.jpg",
    desc: `Trap bar, hex bar šipka`,
  },
  {
    id: 39,
    title: "Razboj za propadanje",
    link: "../sprave-za-vezbanje/razboj-za-propadanje.html",
    category: "sprave",
    price: 150,
    img: "../props/sprave/r1.jpg",
    desc: `Razboj za propadanje, veoma čvrst i stabilan. . . 
    Ceo je od kutija 60x40, ima dole gumene navlake, ne kliza.
    `,
  },
  {
    id: 40,
    title: "Gumeni pod za teretane",
    link: "../sprave-za-vezbanje/gumeni-pod-za-teretanu.html",
    category: "sprave",
    price: 150,
    img: "../props/ostalo/p3.jpg",
    desc: `Gumeni pod za teretane. 
    Ploče su dimenzija 50cm x 50cm x 2cm
    `,
  },
  {
    id: 41,
    title: "šipke i bučice sa navojem fi30mm",
    link: "../sprave-za-vezbanje/sipke-bucice-sa-navojem-fi30.html",
    category: "sipke",
    price: 144,
    img: "../props/sipke/bucice3.jpg",
    desc: `Šipke fi30 sa navojem 183cm i 214cm, i Bučice fi30 sa navojem 35cm i 38cm.`,
  },
  {
    id: 42,
    title: "Univerzalna sprava",
    link: "../sprave-za-vezbanje/univerzalna-sprava.html",
    category: "gladijatori",
    price: 150,
    img: "../props/multi_plus/multi5.jpg",
    desc: `Univerzalna sprava za zgibove, propadanja, bench, ramena, čučnjeve, sklekove, mrtvo dizanje.
    `,
  },
  {
    id: 43,
    title: "Stalak za tegove i razboj za propadanje",
    link: "../sprave-za-vezbanje/stalak-razboj.html",
    category: "stalci",
    price: 123,
    img: "../props/stalci/s2.jpg",
    desc: `Stalak za tegove, razboj za propadanja izrađen od profila 40x40, veoma jak i stabilan, sa 5 položaja visine.`,
  },
  {
    id: 44,
      title: "Zidno vratilo EXTREME",
      link: "../sprave-za-vezbanje/vratilo-extreme.html",
      category: "vratila",
      price: 150,
      img: "../props/zidni/e2.jpg",
      desc: `Zidno vratilo EXTREME, na njemu se moze raditi 5 vrsti zgibovi (5 hvatova), siroki hvat 110cm, rucice sa strane su blago povijene na dole. Uz vratilo dobijate tiplove i srafove.
      `,
    },
    {
      id: 45,
        title: "Vratilo 45° za ugao sobe",
        link: "../sprave-za-vezbanje/vratilo-za-ugao.html",
        category: "vratila",
        price: 150,
        img: "../props/zidni/ug2.jpg",
        desc: `Vratilo 45° za ugao sobe (ćošak) sa ručicama, dužine 110 cm.. Uz vratilo dobijate tiplove i šrafove..
        `,
      },
      {
        id: 46,
        title: "Kosa Klupa za trbušnjake",
        link: "../sprave-za-vezbanje/kosa-klupa-za-trbusnjake.html",
        category: "klupe",
        price: 122,
        img: "../props/trbuh/kk3.jpg",
        desc: `Kosa klupa za trbušnjake izrađena od profila 40x40, jaka, stabilna i izdržljiva klupa,
        Klupa ima 5 položaja kosine za vežbanje, to jest podešavanje nagiba.
        Mogućnost podešavanja razmaka između gornjih i donjih sunđera za noge, to jest podešavanje visine između sunđera, ima 4 nivoa podešavanja.`,
      },
      {
        id: 46,
          title: "Vratilo samostojeće",
          link: "../sprave-za-vezbanje/samostojece-vratilo.html",
          category: "vratila",
          price: 150,
          img: "../props/sprave/vr1.jpg",
          desc: `Vratilo samostojeće za apsolutne zgibove izrađeno od profila 40x40,
          Veoma jaka, masivna i teška sprava, jako stabilna,
          Vratilo ima stepenik za niže vežbače.
          `,
        },
        {
          id: 47,
          title: "Lat mašina",
          link: "../sprave-za-vezbanje/lat-masina.html",
          category: "sprave",
          price: 150,
          img: "../props/sprave/lat1.jpg",
          desc: `Lat mašina veoma jaka, masivna, stabilna, funkcionalna, izrađena od profila 60x40 i 40x40, ima i donji kotur za suvo veslanje i ostale vežbe, uz mašinu se dobija duža i kraca šipka obložene sunđerastim ručkama, noge od mašine se skidaju radi lakšeg transporta i unošenja u prostoriju. Mogućnost izrade i ostalih nastavaka za lat mašinu..
          `,
        },
        {
          id: 48,
            title: "Vratilo za plafon EXTREME",
            link: "../sprave-za-vezbanje/vratilo-za-plafon-extreme.html",
            category: "vratila",
            price: 150,
            img: "../props/zidni/vr1.jpg",
            desc: `Vratilo za plafon EXTREME, na njemu se moze raditi 5 vrsti zgibovi (5 hvatova), siroki hvat 110cm, rucice su blago povijene na dole.  Uz vratilo dobijate tiplove i šrafove.
            `,
          },
          {
            id: 49,
              title: "Vratilo za plafon",
              link: "../sprave-za-vezbanje/vratilo-za-plafon.html",
              category: "vratila",
              price: 150,
              img: "../props/zidni/vr4.jpg",
              desc: `Vratilo za plafon.
              Sirina 110cm siri hvat i 55 cm paralelni hvat..  Uz vratilo dobijate tiplove i šrafove.
              `,
            },
            {
              id: 50,
              title: "Stalak iz dva dela",
              link: "../sprave-za-vezbanje/stalak-iz-dva-dela.html",
              category: "stalci",
              price: 123,
              img: "../props/stalci/dd1.jpg",
              desc: `Stalak iz dva dela(čučanj, ramena , bench, propadanje, nosači)
              Stalci iz dva nezavisna dela koja se pomeraju i steluje se i širina i visina. 
              Jako stabilni i čvrsti.`,
            },
            {
              id: 51,
              title: "Stalak za čučanj, bench, ramena",
              link: "../sprave-za-vezbanje/stalak-za-cucanj.html",
              category: "stalci",
              price: 123,
              img: "../props/stalci/st4.jpg",
              desc: `Veoma cvrst i stabilan, izradjen od kutija 40x40
              Na rasklapanje je zbog transporta.  
              Ima 5 nivoa za podesavanje visine.`,
            },
            {
              id: 52,
              title: "Profesionalni stalak",
              link: "../sprave-za-vezbanje/profesionalni-stalak.html",
              category: "stalci",
              price: 123,
              img: "../props/stalci/sr5.jpg",
              desc: `Profesionalni stalak za ramena,čučanj,kosi bench,ravan bench
              Veoma cvrst i stabilan stalak. 
              Ima sa strane 4  nosaca za odlaganje ploca. `,
            },
            {
              id: 53,
              title: "Stalak za hex bučice (uspravni)",
              link: "../sprave-za-vezbanje/stalak-hex-bucice-uspravni.html",
              category: "stalci",
              price: 123,
              img: "../props/tegovi/u1.jpg",
              desc: `Stalak za hex bučice (uspravni), 1-10kg`,
            },
];

const menuToggle = document.querySelector('.toggle');
const hero = document.querySelector('.hero');

      menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        hero.classList.toggle('active');
      })

      
            
const sectionProduct = document.querySelector('.products-center');
const filterBtns = document.querySelectorAll('.filter-btn');
const container = document.querySelector(".btn-container");
                  
    //   active btns  
 container.addEventListener('click', (e) => {
                    const id = e.target.dataset.id;
                    if (id) {
                      filterBtns.forEach(function(btn) {
                        btn.classList.remove("active");
                        e.target.classList.add("active");
                      });
                    }
                  });

// load items
window.addEventListener('DOMContentLoaded', function() {
  displayMenuItems(menu)
});
// filter items

filterBtns.forEach(function(btn){
  btn.addEventListener('click',function(e){
    const category = e.currentTarget.dataset.id;
    const menuCategory = menu.filter(function(menuItem){
      if (menuItem.category === category) {
        return menuItem;
      }
    })
    // console.log(menuCategory);
    if (category === 'all') {
      displayMenuItems(menu);
    }
    else {
      displayMenuItems(menuCategory);
    }
  });
});


function displayMenuItems(menuItems){
  let displayMenu = menuItems.map(function(item){
    // console.log(item);
    return `<article class="product">
    <div class="img-container">
      <img
        src=${item.img}
        alt=${item.title}
        class="product-img"
      />
      <a href=${item.link} class=""><p class="item-text">
      ${item.desc}
      <i class="las la-chevron-down"></i>
    </p></a>
    </div>
    <a href=${item.link} class=""><h3>${item.title}</h3></a>
     <!--<h4>€ ${item.price}</h4>-->
  </article>`;
  });
  displayMenu = displayMenu.join('');
  sectionProduct.innerHTML = displayMenu
}

//Get the button
var mybutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 800) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }
