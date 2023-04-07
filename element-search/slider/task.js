const prev = document.querySelector('.slider__arrow_prev'); // Кнопка Пердыдущий
const next = document.querySelector('.slider__arrow_next'); // Кнопка Следующий
const image = Array.from(document.querySelectorAll('.slider__item')); // Картинки
const dot = Array.from(document.querySelectorAll('.slider__dot')); // Точки

let slideIndex = 0;

function dot_Activate() {
   dot.forEach((item) => item.classList.remove('slider__dot_active'))
   dot[slideIndex].classList.add('slider__dot_active');
}

function slide_Activate() {
   image.forEach((item) => item.classList.remove('slider__item_active'))
   image[slideIndex].classList.add('slider__item_active')
}

prev.addEventListener("click", () => {
   if (slideIndex - 1 < 0) {
      slideIndex = image.length - 1;
   } else {
      slideIndex -= 1
   }
   dot_Activate();
   slide_Activate();
})

next.addEventListener("click", () => {
   if (slideIndex + 1 === image.length) {
      slideIndex = 0;
   } else {
      slideIndex += 1;
   }
   dot_Activate();
   slide_Activate();
})


dot.forEach((item, index) => {
   item.addEventListener('click', () => {
      dot.forEach((item) => item.classList.remove('slider__dot_active'));
      image.forEach((item) => item.classList.remove('slider__item_active'));

      dot[index].classList.add('slider__dot_active')
      image[index].classList.add('slider__item_active')

   })
})

//changeIndex = image.findIndex((element) => element.className.includes('slider__item_active')); // определение индекса текущего активного слайда}

//dot[i].classList.add('slider__dot_active');
//image.forEach((itme) => itme.classList.remove('.slider__item_active'));
//dot.forEach((item) => item.classList.remove('.slider__dot_active'));
//image[i].classList.add('.slider__item_active')
//dot[i].classList.add('slider__dot_active')