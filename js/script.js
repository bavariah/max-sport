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
      title: "set-komplet",
      link: "../sprave-za-vezbanje/set-komplet.html",
      category: "komplet",
      price: 123,
      img: "../props/komplet/komplet1.jpg",
      desc: `Komplet sprava za kućnu ili komercijalnu varijantu. Moguć odabir boje metala i eko kože.`,
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
      desc: `Dodatak za propadanje i trbušnjake za multifunkcionalnu spravu.<br><br> Po želji boja metala/kože.
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
    {
      id: 5,
      title: "Leg curl - bench klupa",
      link: "../sprave-za-vezbanje/leg-curl-bench-klupa.html",
      category: "sprave",
      price: 150,
      img: "../props/sprave/legcurl5.jpg",
      desc: `Opcije:<br> 1. Može se skinuti nastavak za noge i ubaciti skot nastavak. <br>
      2. Bez nastavaka je kao univerzalna bench klupa.<br><br> Po želji boja metala/kože.
      `,
    },
    {
      id: 6,
      title: "Bokserski džakovi",
      link: "../sprave-za-vezbanje/bokserski-dzakovi.html",
      category: "box",
      price: 123,
      img: "../props/box/dzakovi.jpg",
      desc: `Profi džakovi od: 100cm, 120cm, 150cm, 180cm. Džakovi su kvalitetni i kvalitetna je cerada iz uvoza, kao i šivenje. Uz džak dobijate karabiner da zakačite džak. Imam svoju proizvodnju i džakova i sprava, tako da i držač možete da poručite od mene i dužinu držača i da bude za zid ili plafon. Može odabir boje metala i boja cerade`,
    },
    {
      id: 7,
      title: "Olimpijske šipke i bučice fi50mm",
      link: "../sprave-za-vezbanje/sipke-bucice-fi50mm.html",
      category: "sipke",
      price: 144,
      img: "../props/sipke/olimp_sipka_3.jpg",
      desc: `Olimpijska šipka fi50mm 220cm dužina<br>
      Olimpijska EZ šipka fi50mm<br>
      Bučice fi50mm`,
    },
    {
    id: 8,
      title: "Zidno Vratilo",
      link: "../sprave-za-vezbanje/zidno-vratilo.html",
      category: "vratila",
      price: 150,
      img: "../props/zidni/v2.jpg",
      desc: `Zidno vratilo, veoma čvrsto i kvalitetno odrađeno, uski hvat 55cm a siroki 110cm, ručice sa strane su blago povijene na dole, ručice su obložene original sunđerastom ručkom.
      `,
    },
    {
    id: 9,
      title: "Zidni razboj za propadanje i trbušnjake",
      link: "../sprave-za-vezbanje/zidni-razboj.html",
      category: "vratila",
      price: 150,
      img: "../props/zidni/p2.jpg",
      desc: `Razboj za propadanja i stomak, širina hvata je 55cm. ručice su obložene sunđerastom ručkom.
      Uz razboj dobijate tiple i šrafove.
      `,
    },
    {
    id: 10,
      title: "Sprave za zgibove, trbušnjake i propadanja",
      link: "../sprave-za-vezbanje/zidni-multi-set.html",
      category: "vratila",
      price: 150,
      img: "../props/zidni/mix1.jpg",
      desc: `Set zidni razboj i vratilo za trbušnjake, propadanja i zgibove.<br><br> Po želji boja metala/kože.
      `,
    },
    {
      id: 11,
      title: "Profesionalna Univerzalna Klupa",
      link: "../sprave-za-vezbanje/profesionalna-univerzalna-klupa.html",
      category: "klupe",
      price: 122,
      img: "../props/klupe/pro4.jpg",
      desc: `Profesionalna univerzalna bench klupa izrađena od profila 80x40 (3mm debljina zida), veoma jaka, stabilna i masivna, klupa ima 5 položaja (  ravni, 3 kosa, i pod 90 stepeni ), sedište podesivo u 3 položaja<br><br> Po želji boja metala/kože.`,
    },
    {
      id: 12,
      title: "Vratilo samostojeće (POWER TOWER)",
      link: "../sprave-za-vezbanje/multi-funkcionalna-sprava.html",
      category: "gladijatori",
      price: 150,
      img: "../props/multi_plain/multi7.jpg",
      desc: `Vratilo samostojeće (Power Tower) izrađeno od profila 60x40, jaka, masivna i teška sprava, jako stabilna, uski hvat je 55cm a široki hvat je 110cm, ima i ručke za sklekove, sve ručice su oblozene sunđerastom ručkom..<br><br> Po želji boja metala/kože.
      `,
    },
    {
      id: 13,
      title: "šipke i bučice sa štipaljkama fi30mm",
      link: "../sprave-za-vezbanje/sipke-bucice-stipaljke-fi30mm.html",
      category: "sipke",
      price: 144,
      img: "../props/sipke/sipke_1.jpg",
      desc: `1. Šipka fi30mm <br>
      2. Bučice fi30mm sa štipaljkom`,
    },
    {
      id: 14,
      title: "Vratilo samostojeće (POWER TOWER EXTREME)",
      link: "../sprave-za-vezbanje/vratilo-samostojece-extreme.html",
      category: "gladijatori",
      price: 150,
      img: "../props/multi_plain/ext2.jpg",
      desc: `Vratilo samostojece  (Power Tower EXTREME) 
      Izradjeno od profila 60x40, jaka, masivna i teska sprava, jako stabilna, i pre svega veoma funkcionalna, vratilo je EXTREME<br><br> Po želji boja metala/kože.
      `,
    },
    {
      id: 15,
      title: "Bench klupa",
      link: "../sprave-za-vezbanje/bench-klupa.html",
      category: "klupe",
      price: 122,
      img: "../props/bench/bench1.jpg",
      desc: `Univerzalna bench klupa sa stalkom za šipku, mogućnost dodavanja skot nastavka i nastavaka za prednju i zadnju ložu<br><br> Po želji boja metala/kože.`,
    },
    {
      id: 16,
      title: "bench klupa za sve",
      link: "../sprave-za-vezbanje/bench-klupa-za-sve.html",
      category: "klupe",
      price: 123,
      img: "../props/klupe/kk1.jpg",
      desc: `
      Bench klupa ima 6 položaja nagiba.
      Stalak za šipku je zavaren za bench klupu koji ima 5 položaja visine, može da sve vežbe rade od kontra kosog bencha, ravnog, kosog, i ramena. 
      Bench klupa  je veoma jaka, stabilna, masivna i funkcionalna, izrađena od profila 60x40<br><br> Po želji boja metala/kože.`,
    },
    {
      id: 17,
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
      id: 18,
      title: "Stalak za tegove i šipke fi30 i fi50",
      link: "../sprave-za-vezbanje/stalak-za-tegove.html",
      category: "stalci",
      price: 123,
      img: "../props/stalak_za_tegove/stalak4.jpg",
      desc: `Stalak za tegove i šipke`,
    },
    {
      id: 19,
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
      id: 20,
      title: "šipke i bučice sa navojem fi30mm",
      link: "../sprave-za-vezbanje/sipke-bucice-sa-navojem-fi30.html",
      category: "sipke",
      price: 144,
      img: "../props/sipke/bucice3.jpg",
      desc: `Šipke fi30 sa navojem 183cm i 214cm<br> Bučice fi30 sa navojem 35cm i 38cm<br>EZ šipke fi30mm sa navojem`,
    },
    {
      id: 21,
      title: "tegovi fi30 i fi50",
      link: "../sprave-za-vezbanje/tegovi.html",
      category: "tegovi",
      price: 111,
      img: "../props/tegovi/t2.jpg",
      desc: `Tegovi fi30mm i fi50mm: 1,25kg; 2,5kg; 5kg; 10kg; 15kg; 20kg`,
    },
    {
      id: 22,
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
      id: 23,
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
      id: 24,
      title: "zidni NOSAČI ZA BOKS DŽAK",
      link: "../sprave-za-vezbanje/zidni-nosac-za-boks-dzak.html",
      category: "box",
      price: 123,
      img: "../props/dzak_dodatak/dzak4.jpg",
      desc: `Zidni držač(nosač) za boks  džak (kik boks), izrada po želji kupca.
      Uz držač  dobijate tiple i šrafove.`,
    },
    {
      id: 25,
      title: "Dodaci sprava",
      link: "../sprave-za-vezbanje/dodatak-za-sprave.html",
      category: "sprave",
      price: 123,
      img: "../props/ostalo/dodaci1.jpg",
      desc: `Jednoručni kanap za triceps, 
      Dvoručni kanap za triceps, 
      Triceps press nastavak, 
      Uski paralelni hvat, 
      Jednoručni nastavak, 
      Kriva šipka za cross masinu, 
      šipka lat , 
      Kriva šipka za lat, 
      Nastavak nogu za primicanje, 
      Pojas za opterećenje, 
      Skot nastavak, 
      Nastavak za prednju i zadnju ložu`,
    },
    {
      id: 26,
      title: "bučice",
      link: "../sprave-za-vezbanje/bucice.html",
      category: "sipke",
      price: 111,
      img: "../props/tegovi/bucice4.jpg",
      desc: `Bučice - brzomontirajuće sa tegovima`,
    },
    {
      id: 27,
      title: "Rusko zvono - girje",
      link: "../sprave-za-vezbanje/rusko-zvono.html",
      category: "tegovi",
      price: 111,
      img: "../props/rusko/r1.jpg",
      desc: `Rusko Zvono, girje, kettlebell od: 4kg, 8kg, 12kg, 16kg, 20kg, 24kg`,
    },
    {
      id: 28,
      title: "Bumper tegovi",
      link: "../sprave-za-vezbanje/bumper-tegovi.html",
      category: "tegovi",
      price: 111,
      img: "../props/bumper/bumper1.png",
      desc: `Nema čelika nego su od gume i pogodni su za kućne varijante jer prilikom padanja, bacanja ne oštećuju pod.
      Ploče su od:<br><br> 5kg, 10kg, 15kg, 20kg`,
    },
    {
      id: 29,
      title: "hex bučice",
      link: "../sprave-za-vezbanje/hex-bucice.html",
      category: "sipke",
      price: 111,
      img: "../props/tegovi/hex1.jpg",
      desc: `Bučice od 1-10kg`,
    },
    {
      id: 30,
      title: "Ravna klupa",
      link: "../sprave-za-vezbanje/ravna-klupa.html",
      category: "klupe",
      price: 122,
      img: "../props/klupe/ravna1.jpg",
      desc: `Ravna klupa veoma jaka i stabilna, izradjena od profila 60x40, duzine 110cm. Po želji boja metala/kože.`,
    },
    {
      id: 31,
      title: "Hiperekstenzija",
      link: "../sprave-za-vezbanje/hiperextenzija.html",
      category: "klupe",
      price: 150,
      img: "../props/extenzija/ex2.jpg",
      desc: `Sprava za vežbanje donjeg dela leđa ( hiperekstenzija ) izradjena od profila 60x40 i 40x40, jaka i stabilna, ima podešavanje po visini vežbovnog dela kao i podešavanje po visini dela za noge.  <br><br> Po želji boja metala/kože.
      `,
    },
    {
      id: 32,
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
      id: 33,
      title: "Klupa za trbušnjake (sklopiva)",
      link: "../sprave-za-vezbanje/klupa-za-trbusnjake-sklopiva.html",
      category: "klupe",
      price: 122,
      img: "../props/trbuh/trbuh34.jpg",
      desc: `Klupa za trbusnjake (sklopiva) veoma čvrsta i stabilna, lepog i udobnog dizajna, dole ima gumene navlake protiv klizanja. 
  
      Podešava se nagib, izvlači se ili uvlači da bi bila viša ili niža u zavisnosti kakvo opterećenje želite da vam bude prilikom vežbanja.<br><br> Po želji boja metala/kože.`,
    },
    {
      id: 34,
      title: "3D zglob fi30 i fi50",
      link: "../sprave-za-vezbanje/3D-zglob.html",
      category: "sprave",
      price: 123,
      img: "../props/drzac_za_sipku/drzac1.jpg",
      desc: `3D zglob za šipke`,
    },
    {
      id: 35,
      title: "Trap bar, hex bar šipka (pokretne ručke)",
      link: "../sprave-za-vezbanje/hex-trap-pokretne-rucke.html",
      category: "sipke",
      price: 144,
      img: "../props/hex/h1.jpg",
      desc: `Trap bar, hex bar šipka`,
    },
    {
      id: 36,
      title: "Dodatak za sklekove",
      link: "../sprave-za-vezbanje/dodatak-za-sklekove.html",
      category: "sprave",
      price: 123,
      img: "../props/sklekovi/sklek1.jpg",
      desc: `Dodatak za sklekove ' sklekeri`,
    },
    {
      id: 37,
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
      id: 38,
      title: "Trap bar, hex bar šipka",
      link: "../sprave-za-vezbanje/hex-trap-sipka.html",
      category: "sipke",
      price: 144,
      img: "../props/hex/hex1.jpg",
      desc: `Trap bar, hex bar šipka fi30 i fi50`,
    },
    {
      id: 39,
      title: "Univerzalna sprava",
      link: "../sprave-za-vezbanje/univerzalna-sprava.html",
      category: "gladijatori",
      price: 150,
      img: "../props/multi_plus/multi5.jpg",
      desc: `Univerzalna sprava za zgibove, propadanja, bench, ramena, čučnjeve, sklekove, mrtvo dizanje.
      `,
    },
    {
      id: 40,
      title: "Stalak za tegove i razboj za propadanje",
      link: "../sprave-za-vezbanje/stalak-razboj.html",
      category: "stalci",
      price: 123,
      img: "../props/stalci/s2.jpg",
      desc: `Stalak za tegove, razboj za propadanja izrađen od profila 40x40, veoma jak i stabilan, sa 5 položaja visine.`,
    },
    {
      id: 41,
        title: "Zidno vratilo EXTREME",
        link: "../sprave-za-vezbanje/vratilo-extreme.html",
        category: "vratila",
        price: 150,
        img: "../props/zidni/e2.jpg",
        desc: `Zidno vratilo EXTREME, na njemu se moze raditi 5 vrsti zgibovi (5 hvatova), siroki hvat 110cm, rucice sa strane su blago povijene na dole. Uz vratilo dobijate tiplove i srafove.
        `,
      },
      {
        id: 42,
          title: "Vratilo 45° za ugao sobe",
          link: "../sprave-za-vezbanje/vratilo-za-ugao.html",
          category: "vratila",
          price: 150,
          img: "../props/zidni/ug2.jpg",
          desc: `Vratilo 45° za ugao sobe (ćošak) sa ručicama, dužine 110 cm.. Uz vratilo dobijate tiplove i šrafove..
          `,
        },
        {
          id: 43,
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
          id: 44,
            title: "Vratilo za apsolutne zgibove(ruski zgibovi)",
            link: "../sprave-za-vezbanje/samostojece-vratilo.html",
            category: "vratila",
            price: 150,
            img: "../props/sprave/vr4.jpg",
            desc: `Vratilo samostojeće za apsolutne zgibove izrađeno od profila 40x40,
            Veoma jaka, masivna i teška sprava, jako stabilna,
            Vratilo ima stepenik za niže vežbače.
            `,
          },
          {
            id: 45,
            title: "Power Tower Pro",
            link: "../sprave-za-vezbanje/power-tower-pro.html",
            category: "gladijatori",
            price: 150,
            img: "../props/multi_plain/multi11.jpg",
            desc: `Lat mašina veoma jaka, masivna, stabilna, funkcionalna, izrađena od profila 60x40 i 40x40, ima i donji kotur za suvo veslanje i ostale vežbe, uz mašinu se dobija duža i kraca šipka obložene sunđerastim ručkama, noge od mašine se skidaju radi lakšeg transporta i unošenja u prostoriju. Mogućnost izrade i ostalih nastavaka za lat mašinu..
            `,
          },
          {
            id: 46,
              title: "Vratilo za plafon EXTREME",
              link: "../sprave-za-vezbanje/vratilo-za-plafon-extreme.html",
              category: "vratila",
              price: 150,
              img: "../props/zidni/vr1.jpg",
              desc: `Vratilo za plafon EXTREME, na njemu se moze raditi 5 vrsti zgibovi (5 hvatova), široki hvat 110cm, rucice su blago povijene na dole.  Uz vratilo dobijate tiplove i šrafove.
              `,
            },
            {
              id: 47,
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
                id: 48,
                title: "Stalak iz dva dela",
                link: "../sprave-za-vezbanje/stalak-iz-dva-dela.html",
                category: "stalci",
                price: 123,
                img: "../props/stalci/dd1.jpg",
                desc: `Stalak iz dva dela(čučanj, ramena , bench, propadanje, nosači)
                Stalci iz dva nezavisna dela koja se pomeraju i šteluje se i širina i visina. 
                Jako stabilni i čvrsti.`,
              },
              {
                id: 22,
                title: "Stalak za bučice",
                link: "../sprave-za-vezbanje/stalak-za-bucice.html",
                category: "stalci",
                price: 123,
                img: "../props/tegovi/polica4.jpg",
                desc: `Stalak za bučice - ČVRSTE KONSTRUKCIJE, MODERAN DIZAJN`,
              },
              {
                id: 50,
                title: "Stalak za hex bučice",
                link: "../sprave-za-vezbanje/stalak-za-hex-bucice.html",
                category: "stalci",
                price: 123,
                img: "../props/tegovi/drzac4.jpg",
                desc: `Stalak za hex bučice, 1-10kg`,
              },
              {
                id: 51,
                title: "Stalak za hex bučice (uspravni)",
                link: "../sprave-za-vezbanje/stalak-hex-bucice-uspravni.html",
                category: "stalci",
                price: 123,
                img: "../props/tegovi/u1.jpg",
                desc: `Stalak za hex bučice (uspravni), 1-10kg`,
              },
              {
                id: 52,
                title: "Univerzalna sprava EXTREME",
                link: "../sprave-za-vezbanje/univerzalna-sprava-extreme.html",
                category: "gladijatori",
                price: 150,
                img: "../props/multi_extreme/u1.jpg",
                desc: `Univerzalna sprava za zgibove EXTREME.
                Za propadanje, bench, ramena, čučanj, mrtvo dizanje. Veoma je jaka, masivna, stabilna i funkcionalna, izrađena od profila 60x40.  
                Uski hvat je 55cm a široki 110cm. 
                5 nivoa držača za tegove + nivo za mrtvo dizanje.
                `,
              },
              {
                id: 53,
                title: "Plafonski NOSAČI ZA BOKS DŽAK",
                link: "../sprave-za-vezbanje/plafonski-nosac-za-boks-dzak.html",
                category: "box",
                price: 123,
                img: "../props/dzak_dodatak/dzak3.jpg",
                desc: `Plafonski nosac za boks dzak.
                Uz držač dobijate tiple i šrafove. .`,
              },
              {
                id: 54,
                title: "Ručka za vežbanje podlaktice i nadlaktice",
                link: "../sprave-za-vezbanje/rucka-za-podlakticu-nadlakticu.html",
                category: "sprave",
                price: 123,
                img: "../props/ostalo/r2.jpg",
                desc: `Ručka za vežbanje podlaktice i nadlaktice (ceo set)<br>
                Set ručka, kanap, i mesto za tegove.`,
              },
              {
                id: 55,
                title: "Zidni Razboj za propadanje",
                link: "../sprave-za-vezbanje/zidni-razboj-za-propadanje.html",
                category: "vratila",
                price: 123,
                img: "../props/zidni/rg1.jpg",
                desc: `Razboj za propadanje, veoma čvrsto, ručke su obložene sunđerastom ručkom.
                Unutrašnja širina je od 55 do 61 cm, sto je i standard za propadanje. 
                Uz razboj dobijate šrafove i tiple.`,
              },
              {
                id: 56,
                title: "Vratilo, razboj i trbušnjaci (3u1)",
                link: "../sprave-za-vezbanje/vratilo-razboj-trbusnjaci.html",
                category: "vratila",
                price: 123,
                img: "../props/zidni/brt1.jpg",
                desc: `Vratilo za zgibove više hvatova.
                Razboj za propadanje i trbušnjake.
                Veoma čvrsto i jako, kutije 35x35.
                Uz Vratilo dobijate i kuke za tiplovanje i šrafljenje kao i tiple i šrafove.  `,
              },
              {
                id: 57,
                title: "TopRoller - ručka za vežbe obaranja ruku",
                link: "../sprave-za-vezbanje/top-roller.html",
                category: "sprave",
                price: 123,
                img: "../props/ostalo/s1.jpg",
                desc: `Ručka za vežbe obaranja ruku.
                Može i za desnu i za levu ruku da se koristi.
                Veoma je čvrsta ručka, jak i masivan lanac koji nikako ne može spasti sa kruga dok vežbate, 
                Uz ručku dobijate i sajlu, zakačaljke i nastavak na koji stavljate tegove.`,
              },
              {
                id: 58,
                title: "STOJEĆI SKOT (45 i 90)",
                link: "../sprave-za-vezbanje/stojeci-skot.html",
                category: "sprave",
                price: 123,
                img: "../props/skot_klupa/s1.jpg",
                desc: `Stojeći skot veoma čvrst, stabilan i masivan, rasklopiv radi lakšeg transporta. 
                Podešavanje nivoa visine naslona skota radi prilagođavanja visini vežbaca, 
                Podešavanje visine nosača tegova nezavisno jednih od drugih i visine naslona skota. 
                <br><br> Po želji boja metala/kože.`,
              },
              {
                id: 59,
                title: "Skot klupa",
                link: "../sprave-za-vezbanje/skot-klupa.html",
                category: "klupe",
                price: 150,
                img: "../props/skot_klupa/bicepsi2.jpg",
                desc: `Skot klupa pod uglom od 45 stepeni, jaka i stabilna, skot ima 3 položaja visine, sedište 3 položaja. Po želji boja metala i eko kože..
                `,
              },
              {
                id: 60,
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
                id: 61,
                title: "Half Rack 2",
                link: "../sprave-za-vezbanje/half-rack-2.html",
                category: "gladijatori",
                price: 123,
                img: "../props/sprave/hr1.jpg",
                desc: `
                Half Rack 2. Po želji boja konstrukcije, izrađen od profila 60x40x3mm i 50x50x3mm`,
              },
              {
                id: 62,
                title: "šipka za triceps",
                link: "../sprave-za-vezbanje/sipka-za-triceps.html",
                category: "sipke",
                price: 123,
                img: "../props/sipke/t1.jpg",
                desc: `
                šipka za triceps`,
              },
              {
                id: 63,
                title: "Lat mašina",
                link: "../sprave-za-vezbanje/lat-masina.html",
                category: "gladijatori",
                price: 150,
                img: "../props/sprave/lat1.jpg",
                desc: `Lat mašina veoma jaka, masivna, stabilna, funkcionalna, izrađena od profila 60x40 i 40x40, ima i donji kotur za suvo veslanje i ostale vežbe, uz mašinu se dobija duža i kraca šipka obložene sunđerastim ručkama, noge od mašine se skidaju radi lakšeg transporta i unošenja u prostoriju. Mogućnost izrade i ostalih nastavaka za lat mašinu..
                `,
              },
              {
                id: 64,
                title: "Razboj za propadanje i trbušnjake (SKLOPIVE RUCKE)",
                link: "../sprave-za-vezbanje/razboj-sklopivi.html",
                category: "vratila",
                price: 123,
                img: "../props/zidni/rs1.jpg",
                desc: `Razboj za propadanja i stomačne mišiće, širina hvata je 55cm, ručice su obložene sunđerastom ručkom. 
                Mogućnost sklapanja ručki ka gore radi više prostora u sobi kada ne trenirate, sklapaju se kopletne ručke a i ručice koje držite kada radite stomačne mišiće. 
                Uz vratilo dobijate tiple i šrafove`,
              },
              {
                id: 65,
                title: "Stalak za čučanj, ramena, bench..",
                link: "../sprave-za-vezbanje/stalak-poluprofesionalni.html",
                category: "stalci",
                price: 123,
                img: "../props/stalci/ss1.jpg",
                desc: `Poluprofesionalni stalak sa kojim sve vežbe možete raditi  i sa ovom univerzalnom klupom,  
                Stalak je izrađen od profila 60x40, veoma je jak, masivan i stabilan.
                Stalak je na rasklapanje zbog transporta.`,
              },
              {
                id: 66,
                title: "šipke za farmerov hod",
                link: "../sprave-za-vezbanje/sipke-za-farmerov-hod.html",
                category: "sipke",
                price: 123,
                img: "../props/sipke/f4.jpg",
                desc: `šipke za farmerov hod`,
              },
              {
                id: 67,
                title: "ručke za latex trake",
                link: "../sprave-za-vezbanje/rucke-za-latex-trake.html",
                category: "sprave",
                price: 123,
                img: "../props/sprave/rucke1.jpg",
                desc: `ručke za latex trake`,
              },
              {
                id: 68,
                title: "vratilo herkules",
                link: "../sprave-za-vezbanje/vratilo-herkules.html",
                category: "vratila",
                price: 123,
                img: "../props/zidni/h3.jpg",
                desc: `Zidno vratilo HERKULES, veoma čvrsto, uski hvat je 55cm a široki hvat je 110cm. Ručice na stranama su blago povijene na dole, sve ručice obložene sunđerastom ručkom. Po želji boja metala i eko kože.`,
              },
              {
                id: 69,
                title: "Nastavak za T bar šipku",
                link: "../sprave-za-vezbanje/nastavak-za-t-bar-sipku.html",
                category: "sprave",
                price: 123,
                img: "../props/sprave/t2.jpg",
                desc: `Nastavak za T bar šipku`,
              },
  ];
  
  const dropdownMenu = document.querySelector('.dropdown-content');
  const menuToggle = document.querySelector('.toggle');
  const hero = document.querySelector('.hero');
  
        menuToggle.addEventListener('click', () => {
          menuToggle.classList.toggle('active');
          hero.classList.toggle('active');
        })
  
  
  // load items
  window.addEventListener('DOMContentLoaded', function() {
    displayMainMenu(menu)
  });
  function displayMainMenu(menu){
    let displayMainMenu = menu.map(function(item){
      return `<a href=${item.link}>
      <img src=${item.img} alt=${item.title} class="">
      ${item.title}</a>`;
    });
    displayMainMenu = displayMainMenu.join('');
    dropdownMenu.innerHTML = displayMainMenu
  }
  
  
  
  function goBack() {
    window.history.go(-1);
  }
  
  //using selectors inside the element
  const questions = document.querySelectorAll(".question");
  
  questions.forEach(function (question) {
    const btn = question.querySelector(".question-btn");
    // console.log(btn);
  
    btn.addEventListener("click", function () {
      // console.log(question);
  
      questions.forEach(function (item) {
        if (item !== question) {
          item.classList.remove("show-text");
        }
      });
  
      question.classList.toggle("show-text");
    });
  });