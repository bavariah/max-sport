const menu = [
  {
    id: 1,
    title: "sprave",
    link: "../sprave-za-vezbanje/profesionalna-klupa.html",
    category: "sprave",
    price: 150,
    img: "../props/sprave/legcurl5.jpg",
    desc: `1. Half Rack 2 PROFESIONALNI - 375 eura
    2. Univerzalna bench klupa PROFESIONALNA - 170 eura
    4. Bucice sa navojima 35cm duzine - 2000din/kom
    5. Bucice sa navojima 38cm duzine - 2200din/kom
    `,
  },
  {
    id: 2,
    title: "PRO - klupa",
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
    title: "šipke",
    link: "../sprave-za-vezbanje/profesionalna-klupa.html",
    category: "sipke",
    price: 144,
    img: "../props/sipke/olimp_sipka_3.jpg",
    desc: `1. Olimpijska sipka fi50mm 220cm duzina<br>
    2. Bucice fi30mm sa navojem`,
  },
  {
    id: 4,
    title: "tegovi",
    link: "../sprave-za-vezbanje/profesionalna-klupa.html",
    category: "tegovi",
    price: 111,
    img: "../props/test.jpg",
    desc: `1. Half Rack 2 PROFESIONALNI - 375 eura
    2. Univerzalna bench klupa PROFESIONALNA - 170 eura
    4. Bucice sa navojima 35cm duzine - 2000din/kom
    5. Bucice sa navojima 38cm duzine - 2200din/kom`,
  },
  {
    id: 5,
    title: "fitnes",
    link: "../sprave-za-vezbanje/profesionalna-klupa.html",
    category: "fitnes",
    price: 123,
    img: "../props/test.jpg",
    desc: `1. Half Rack 2 PROFESIONALNI - 375 eura
    2. Univerzalna bench klupa PROFESIONALNA - 170 eura
    4. Bucice sa navojima 35cm duzine - 2000din/kom
    5. Bucice sa navojima 38cm duzine - 2200din/kom`,
  },{
    id: 6,
    title: "Bokserski program",
    link: "../sprave-za-vezbanje/profesionalna-klupa.html",
    category: "box",
    price: 123,
    img: "../props/box/dzakovi.jpg",
    desc: `1. Half Rack 2 PROFESIONALNI - 375 eura
    2. Univerzalna bench klupa PROFESIONALNA - 170 eura
    4. Bucice sa navojima 35cm duzine - 2000din/kom
    5. Bucice sa navojima 38cm duzine - 2200din/kom`,
  },{
    id: 7,
    title: "ostalo za teretanu",
    link: "../sprave-za-vezbanje/profesionalna-klupa.html",
    category: "ostalo",
    price: 123,
    img: "../props/test.jpg",
    desc: `1. Half Rack 2 PROFESIONALNI - 375 eura
    2. Univerzalna bench klupa PROFESIONALNA - 170 eura
    4. Bucice sa navojima 35cm duzine - 2000din/kom
    5. Bucice sa navojima 38cm duzine - 2200din/kom`,
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
      <p class="item-text">
        ${item.desc}
        <i class="las la-chevron-down"></i>
      </p>
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