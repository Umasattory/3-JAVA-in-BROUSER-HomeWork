
const mainMenu = Array.from(document.querySelectorAll('.menu__link'))
const hasSubMenu = mainMenu.filter((hasSub) => hasSub.nextElementSibling !== null);

hasSubMenu.forEach((subs) => {
   subs.onclick = () => {
      if (subs.closest('.menu__item').querySelector('.menu_sub')) {
         if (document.querySelector('.menu_active')) {
            document.querySelector('.menu_active').classList.remove('menu_active')
         }
         subs.closest('.menu__item').querySelector('.menu_sub').classList.add('menu_active');
      }
      return false;
   }
})

/* const allmenuLink = Array.from(document.querySelectorAll('.menu__link'));
allmenuLink.forEach((element) => {
   const b = a.filter((element) => element.nextElementSibling !== null)
}) */