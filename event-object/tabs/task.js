const main__Menu = Array.from(document.querySelectorAll('.tab'));
const menuContent = Array.from(document.querySelectorAll('.tab__content'));

main__Menu.forEach((menu) => {
   menu.addEventListener('click', () => {
      const clearActiveTab = menu.closest('.tab__navigation').querySelector('.tab_active');
      clearActiveTab.classList.remove('tab_active')
      const index = main__Menu.indexOf(menu);
      menu.classList.add('tab_active');

      const clearActiveContent = document.querySelector('.tab__content').closest('.tab__contents').querySelector('.tab__content_active');
      clearActiveContent.classList.remove('tab__content_active')
      menuContent[index].classList.add('tab__content_active')
   })
});