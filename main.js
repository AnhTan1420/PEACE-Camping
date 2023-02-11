window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);
});

function menuAdapt() {
  const menu = document.querySelector('.js-menu');
  const nav = document.querySelector('.navigation');
  menu.classList.toggle('active');
  nav.classList.toggle('active');
}

function gfg(imgs) {
  var expandImg = document.getElementById("expand");

  expandImg.src = imgs.src;

  expandImg.parentElement.style.display = "flex";
}

function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu img');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  if (tabMenu.length && tabContent.length) {

    tabContent[0].classList.add('ativo')

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo");
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
initTabNav();