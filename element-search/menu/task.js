

const menuLinks = Array.from(document.querySelectorAll('.menu__link'));
const hasSubMenu = menuLinks.filter((link) => link.nextElementSibling !== null);
hasSubMenu.forEach((link) => {
   link.onclick = () => {
      if (link.closest('.menu__item').querySelector('.menu_sub')) {
         if (document.querySelector('.menu_active')) {
            document.querySelector('.menu_active').classList.remove('menu_active')
         }
         link.closest('.menu__item').querySelector('.menu_sub').classList.add('menu_active');
      };
      return false;
   }
   return false
});

/*

const allmenuLink = Array.from(document.querySelectorAll('.menu__link'));
allmenuLink.forEach((element) => {
   
})

//
const b = a.filter((element) => element.nextElementSibling !== null)
//
*/

