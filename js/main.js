const menu = [
  {
    id: 1,
    title: "Leg curl - bench klupa",
    link: "../sprave-za-vezbanje/leg-curl-bench-klupa.html",
    category: "sprave",
    price: 150,
    img: "../props/sprave/legcurl5.jpg",
    desc: `Opcije:<br> 1. Moze se skinuti nastavak za noge i ubaciti skot nastavak. <br>
    2. Bez nastavaka je kao univerzalna bench klupa.
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
    2. Stalak za ramena, kosi bench, ravan bench - podesiv po sirini + nosaci za tegove`,
  },
  {
    id: 3,
    title: "šipke, bučice i štipaljke fi30mm",
    link: "../sprave-za-vezbanje/sipke-bucice-stipaljke-fi30mm.html",
    category: "sipke",
    price: 144,
    img: "../props/sipke/sipke_1.jpg",
    desc: `1. Šipka fi30mm <br>
    2. Bučice fi30mm sa štipaljkom`,
  },
  {
    id: 4,
    title: "bučice",
    link: "../sprave-za-vezbanje/bucice.html",
    category: "tegovi",
    price: 111,
    img: "../props/tegovi/bucice4.jpg",
    desc: `Bučice svih veličina/težina`,
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
    desc: `Set raznih pozicija i hvatova za zgibove
    `,
  },
  {
  id: 10,
    title: "Zidni razboj za propadanje i trbušnjake",
    link: "../sprave-za-vezbanje/zidni-razboj.html",
    category: "sprave",
    price: 150,
    img: "../props/zidni/trbuh.jpg",
    desc: `Set pozicija za trbušnjake i propadanja.
    `,
  },
  {
  id: 11,
    title: "Sprave za zgibove, trbušnjake i propadanja",
    link: "../sprave-za-vezbanje/zidni-multi-set.html",
    category: "sprave",
    price: 150,
    img: "../props/zidni/mix1.jpg",
    desc: `Set zidni razboj i vratilo za trbušnjake, propadanja i zgibove.
    `,
  },
  {
    id: 12,
    title: "Hiperekstenzija",
    link: "../sprave-za-vezbanje/hiperextenzija.html",
    category: "sprave",
    price: 150,
    img: "../props/extenzija/extenzija2.jpg",
    desc: `Hiperekstenzija.
    `,
  },
  {
    id: 13,
    title: "Klupa za trbušnjake",
    link: "../sprave-za-vezbanje/trbusnjaci.html",
    category: "klupe",
    price: 122,
    img: "../props/trbuh/trbuh1.jpg",
    desc: `Klupa za trbušnjake. Podesiva.`,
  },
  {
    id: 14,
    title: "MultiFunkcionalna Sprava",
    link: "../sprave-za-vezbanje/multi-funkcionalna-sprava.html",
    category: "sprave",
    price: 150,
    img: "../props/multi_plain/multi2.jpg",
    desc: `Velika sprava multifunkcionalna - zgibovi, propadanje, sklekovi...
    `,
  },
  {
    id: 15,
    title: "Dodaci za MultiFunkcionalnu Spravu",
    link: "../sprave-za-vezbanje/multi-funkcionalna-dodaci.html",
    category: "sprave",
    price: 150,
    img: "../props/multi_plus/multi5.jpg",
    desc: `Dodaci za MultiFunkcionalnu Spravu.
    `,
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
    desc: `Univerzalna bench klupa sa stalkom za šipku, mogućnost dodavanja skot nastavka i nastavaka za prednju i zadnju ložu`,
  },
  {
    id: 18,
    title: "Skot klupa",
    link: "../sprave-za-vezbanje/skot-klupa.html",
    category: "sprave",
    price: 150,
    img: "../props/skot_klupa/bicepsi2.jpg",
    desc: `Skot klupa. Sprava za mišiće nadlaktice (biceps)
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
    title: "Stalak za bučice 2",
    link: "../sprave-za-vezbanje/stalak-za-bucice-mini.html",
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
    desc: `Asortiman Bokserskih Džakova`,
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
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}