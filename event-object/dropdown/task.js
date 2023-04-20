const mainButtons = Array.from(document.querySelectorAll(".dropdown__value"));
const dropButtons = Array.from(document.querySelectorAll('.dropdown__item'));

mainButtons.forEach((buttom) => {
   const dropdown_activate = buttom.closest(".dropdown").querySelector(".dropdown__list");
   buttom.addEventListener('click', () => {
      dropdown_activate.classList.toggle('dropdown__list_active');
   })

   dropButtons.forEach((item) => {
      item.addEventListener('click', (e) => {
         buttom.textContent = item.textContent.trim()
         dropdown_activate.classList.remove('dropdown__list_active');
         e.preventDefault()
      })
   })
});





