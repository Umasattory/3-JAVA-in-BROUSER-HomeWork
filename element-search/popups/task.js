const log = console.log;

const fieldPopupActivate = Array.from(document.querySelectorAll("div:not([class])"));
const showPopupStart = document.getElementById('modal_main');

fieldPopupActivate.forEach(element => {
   element.addEventListener('click', () => {
      showPopupStart.classList.add('modal_active')
   });
});

const closeOn_X = showPopupStart.querySelector('.modal__close');
closeOn_X.addEventListener('click', () => {
   showPopupStart.classList.remove('modal_active')
});

const nextPopup = showPopupStart.querySelector('.show-success');
const nextPopShow = document.getElementById('modal_success');
nextPopup.addEventListener('click', () => {
   nextPopShow.classList.add('modal_active')
   showPopupStart.classList.remove('modal_active')
})

const closeTo_X = nextPopShow.querySelector('.modal__close');
closeTo_X.addEventListener('click', () => {
   nextPopShow.classList.remove('modal_active');
})

const updatePage = nextPopShow.querySelector('.btn');
updatePage.addEventListener('click', () => {
   location.reload();
   return false;
});

