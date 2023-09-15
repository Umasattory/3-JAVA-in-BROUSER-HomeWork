const modal = document.querySelector('#subscribe-modal');
const modolClose = modal.querySelector('.modal__close');

window.addEventListener('beforeunload', (e) => {
   document.cookie.length === 0 ? modal.classList.add('modal_active'): console.log("В прошлую загрузку окно было показано!");
   e.preventDefault();
   e.returnValue = "";
})

modolClose.addEventListener('click', () => {
   document.cookie = "popup=closedOne";
   modal.classList.remove('modal_active')
})

console.log(document.cookie)
