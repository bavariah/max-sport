const menuToggle = document.querySelector('.toggle');
const hero = document.querySelector('.hero');

      menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        hero.classList.toggle('active');
      })

