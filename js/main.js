!function(){"use strict";function o(){var o=window,t=document;if(!("scrollBehavior"in t.documentElement.style&&!0!==o.__forceSmoothScrollPolyfill__)){var l,e=o.HTMLElement||o.Element,r=468,i={scroll:o.scroll||o.scrollTo,scrollBy:o.scrollBy,elementScroll:e.prototype.scroll||n,scrollIntoView:e.prototype.scrollIntoView},s=o.performance&&o.performance.now?o.performance.now.bind(o.performance):Date.now,c=(l=o.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(l)?1:0);o.scroll=o.scrollTo=function(){void 0!==arguments[0]&&(!0!==f(arguments[0])?h.call(o,t.body,void 0!==arguments[0].left?~~arguments[0].left:o.scrollX||o.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:o.scrollY||o.pageYOffset):i.scroll.call(o,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:o.scrollX||o.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:o.scrollY||o.pageYOffset))},o.scrollBy=function(){void 0!==arguments[0]&&(f(arguments[0])?i.scrollBy.call(o,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):h.call(o,t.body,~~arguments[0].left+(o.scrollX||o.pageXOffset),~~arguments[0].top+(o.scrollY||o.pageYOffset)))},e.prototype.scroll=e.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==f(arguments[0])){var o=arguments[0].left,t=arguments[0].top;h.call(this,this,void 0===o?this.scrollLeft:~~o,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},e.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==f(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},e.prototype.scrollIntoView=function(){if(!0!==f(arguments[0])){var l=function(o){for(;o!==t.body&&!1===(e=p(l=o,"Y")&&a(l,"Y"),r=p(l,"X")&&a(l,"X"),e||r);)o=o.parentNode||o.host;var l,e,r;return o}(this),e=l.getBoundingClientRect(),r=this.getBoundingClientRect();l!==t.body?(h.call(this,l,l.scrollLeft+r.left-e.left,l.scrollTop+r.top-e.top),"fixed"!==o.getComputedStyle(l).position&&o.scrollBy({left:e.left,top:e.top,behavior:"smooth"})):o.scrollBy({left:r.left,top:r.top,behavior:"smooth"})}else i.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function n(o,t){this.scrollLeft=o,this.scrollTop=t}function f(o){if(null===o||"object"!=typeof o||void 0===o.behavior||"auto"===o.behavior||"instant"===o.behavior)return!0;if("object"==typeof o&&"smooth"===o.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+o.behavior+" is not a valid value for enumeration ScrollBehavior.")}function p(o,t){return"Y"===t?o.clientHeight+c<o.scrollHeight:"X"===t?o.clientWidth+c<o.scrollWidth:void 0}function a(t,l){var e=o.getComputedStyle(t,null)["overflow"+l];return"auto"===e||"scroll"===e}function d(t){var l,e,i,c,n=(s()-t.startTime)/r;c=n=n>1?1:n,l=.5*(1-Math.cos(Math.PI*c)),e=t.startX+(t.x-t.startX)*l,i=t.startY+(t.y-t.startY)*l,t.method.call(t.scrollable,e,i),e===t.x&&i===t.y||o.requestAnimationFrame(d.bind(o,t))}function h(l,e,r){var c,f,p,a,h=s();l===t.body?(c=o,f=o.scrollX||o.pageXOffset,p=o.scrollY||o.pageYOffset,a=i.scroll):(c=l,f=l.scrollLeft,p=l.scrollTop,a=n),d({scrollable:c,method:a,startTime:h,startX:f,startY:p,x:e,y:r})}}"object"==typeof exports&&"undefined"!=typeof module?module.exports={polyfill:o}:o()}();

// make sure sw are supp

if('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
    .register('../sw_cached_site.js')
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
    2. Bez nastavaka je kao univerzalna bench klupa.<br><br> Po želji boja metala/sunđera.
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
    2. Stalak za ramena, kosi bench, ravan bench - podesiv po sirini + nosaci za tegove<br><br> Po želji boja metala/sunđera.`,
  },
  {
    id: 3,
    title: "Dodaci za MultiFunkcionalnu Spravu",
    link: "../sprave-za-vezbanje/multi-funkcionalna-dodaci.html",
    category: "sprave",
    price: 150,
    img: "../props/multi_plus/multi5.jpg",
    desc: `Dodaci za MultiFunkcionalnu Spravu.<br><br> Po želji boja metala/sunđera.
    `,
  },
  {
    id: 4,
    title: "Univerzalna Klupa",
    link: "../sprave-za-vezbanje/univerzalna-klupa.html",
    category: "klupe",
    price: 122,
    img: "../props/trbuh/univerz3.jpg",
    desc: `Univerzalna bench klupa 6 položaja<br><br> Po želji boja metala/sunđera.`,
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
    title: "Bokserski program",
    link: "../sprave-za-vezbanje/bokserski-dzakovi.html",
    category: "box",
    price: 123,
    img: "../props/box/dzakovi.jpg",
    desc: `Asortiman Bokserskih Džakova`,
  },
  {
    id: 7,
    title: "Stalak",
    link: "../sprave-za-vezbanje/stalak-gym.html",
    category: "ostalo",
    price: 123,
    img: "../props/stalci/stalak4.jpg",
    desc: `Stalak za čučanj, ramena, kosi bench, ravan bench, kontra kosi bench, + nosači za tegove`,
  },
  {
    id: 8,
    title: "Olimpijske šipke i bučice sa navojem fi50mm",
    link: "../sprave-za-vezbanje/sipke-bucice-fi50mm.html",
    category: "sipke",
    price: 144,
    img: "../props/sipke/olimp_sipka_3.jpg",
    desc: `1. Olimpijska šipka fi50mm 220cm dužina<br>
    2. Bučice fi50mm sa navojem`,
  },
  {
  id: 9,
    title: "Vratilo extreme za zid",
    link: "../sprave-za-vezbanje/vratilo-extreme.html",
    category: "sprave",
    price: 150,
    img: "../props/zidni/vratilo2.jpg",
    desc: `Set raznih pozicija i hvatova za zgibove<br><br> Po želji boja metala/sunđera.
    `,
  },
  {
  id: 10,
    title: "Zidni razboj za propadanje i trbušnjake",
    link: "../sprave-za-vezbanje/zidni-razboj.html",
    category: "sprave",
    price: 150,
    img: "../props/zidni/trbuh.jpg",
    desc: `Set pozicija za trbušnjake i propadanja.<br><br> Po želji boja metala/sunđera.
    `,
  },
  {
  id: 11,
    title: "Sprave za zgibove, trbušnjake i propadanja",
    link: "../sprave-za-vezbanje/zidni-multi-set.html",
    category: "sprave",
    price: 150,
    img: "../props/zidni/mix1.jpg",
    desc: `Set zidni razboj i vratilo za trbušnjake, propadanja i zgibove.<br><br> Po želji boja metala/sunđera.
    `,
  },
  {
    id: 12,
    title: "Hiperekstenzija",
    link: "../sprave-za-vezbanje/hiperextenzija.html",
    category: "sprave",
    price: 150,
    img: "../props/extenzija/extenzija2.jpg",
    desc: `Hiperekstenzija.<br><br> Po želji boja metala/sunđera.
    `,
  },
  {
    id: 13,
    title: "Klupa za trbušnjake",
    link: "../sprave-za-vezbanje/klupa-za-trbusnjake.html",
    category: "klupe",
    price: 122,
    img: "../props/trbuh/trbuh1.jpg",
    desc: `Klupa za trbušnjake.<br><br> Po želji boja metala/sunđera.`,
  },
  {
    id: 14,
    title: "Tower EXTREME i PRO",
    link: "../sprave-za-vezbanje/multi-funkcionalna-sprava.html",
    category: "sprave",
    price: 150,
    img: "../props/multi_plain/multi5.jpg",
    desc: `Velika sprava multifunkcionalna - zgibovi, propadanje, sklekovi...<br><br> Po želji boja metala/sunđera.
    `,
  },
  {
    id: 15,
    title: "šipke, bučice i štipaljke fi30mm",
    link: "../sprave-za-vezbanje/sipke-bucice-stipaljke-fi30mm.html",
    category: "sipke",
    price: 144,
    img: "../props/sipke/sipke_1.jpg",
    desc: `1. Šipka fi30mm <br>
    2. Bučice fi30mm sa štipaljkom`,
  },
  {
    id: 16,
    title: "Velika MultiFunkcionalna Sprava",
    link: "../sprave-za-vezbanje/multi-funkcionalna-extreme.html",
    category: "sprave",
    price: 150,
    img: "../props/multi_extreme/multi3.jpg",
    desc: `Velika sprava multifunkcionalna - zgibovi, propadanje, sklekovi, nosači za šipku kad se rade ramena, kosi bench, ravan bench, kontra kosi bench, mrtvo dizanje.
    `,
  },
  {
    id: 17,
    title: "Bench klupa",
    link: "../sprave-za-vezbanje/bench-klupa.html",
    category: "klupe",
    price: 122,
    img: "../props/bench/bench1.jpg",
    desc: `Univerzalna bench klupa sa stalkom za šipku, mogućnost dodavanja skot nastavka i nastavaka za prednju i zadnju ložu<br><br> Po želji boja metala/sunđera.`,
  },
  {
    id: 18,
    title: "Skot klupa",
    link: "../sprave-za-vezbanje/skot-klupa.html",
    category: "sprave",
    price: 150,
    img: "../props/skot_klupa/bicepsi2.jpg",
    desc: `Skot klupa. Sprava za mišiće nadlaktice (biceps)<br><br> Po želji boja metala/sunđera.
    `,
  },
  {
    id: 19,
    title: "3D zglob",
    link: "../sprave-za-vezbanje/3D-zglob.html",
    category: "ostalo",
    price: 123,
    img: "../props/drzac_za_sipku/drzac1.jpg",
    desc: `3D zglob za šipke`,
  },
  {
    id: 20,
    title: "Stalak za tegove i šipke",
    link: "../sprave-za-vezbanje/stalak-za-tegove.html",
    category: "ostalo",
    price: 123,
    img: "../props/stalak_za_tegove/stalak4.jpg",
    desc: `Stalak za tegove i šipke`,
  },
  {
    id: 21,
    title: "Dodatak za sklekove",
    link: "../sprave-za-vezbanje/dodatak-za-sklekove.html",
    category: "ostalo",
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
    desc: `Trap bar, hex bar šipka`,
  },
  {
    id: 23,
    title: "EZ šipka",
    link: "../sprave-za-vezbanje/ez-sipka.html",
    category: "sipke",
    price: 144,
    img: "../props/sipke/ez1.jpg",
    desc: `EZ šipka`,
  },
  {
    id: 24,
    title: "tegovi",
    link: "../sprave-za-vezbanje/tegovi.html",
    category: "tegovi",
    price: 111,
    img: "../props/tegovi/tegovi1.jpg",
    desc: `Tegovi svih veličina/težina`,
  },
  {
    id: 25,
    title: "Stalak za bučice",
    link: "../sprave-za-vezbanje/stalak-za-bucice.html",
    category: "ostalo",
    price: 123,
    img: "../props/tegovi/polica4.jpg",
    desc: `Stalak za bučice - ČVRSTE KONSTRUKCIJE, MODERAN DIZAJN`,
  },
  {
    id: 26,
    title: "Stalak za hex bučice",
    link: "../sprave-za-vezbanje/stalak-za-hex-bucice.html",
    category: "ostalo",
    price: 123,
    img: "../props/tegovi/drzac4.jpg",
    desc: `Stalak za bučice manjih težina`,
  },
  {
    id: 27,
    title: "ZIDNI NOSAČ ZA DŽAK ZA BOKS",
    link: "../sprave-za-vezbanje/zidni-nosac-za-boks-dzak.html",
    category: "box",
    price: 123,
    img: "../props/dzak_dodatak/dzak4.jpg",
    desc: `Asortiman Bokserskih Džakova<br><br> Po želji boja metala.`,
  },
  {
    id: 28,
    title: "Dodaci sprava",
    link: "../sprave-za-vezbanje/dodatak-za-sprave.html",
    category: "ostalo",
    price: 123,
    img: "../props/ostalo/dodaci1.jpg",
    desc: `Dodaci sprava, šipke, konopci, držači itd`,
  },
  {
    id: 29,
    title: "bučice",
    link: "../sprave-za-vezbanje/bucice.html",
    category: "tegovi",
    price: 111,
    img: "../props/tegovi/bucice4.jpg",
    desc: `Bučice svih veličina/težina`,
  },
  {
    id: 30,
    title: "Rusko zvono",
    link: "../sprave-za-vezbanje/rusko-zvono.html",
    category: "tegovi",
    price: 111,
    img: "../props/rusko/rusko1.png",
    desc: `Rusko Zvono`,
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
