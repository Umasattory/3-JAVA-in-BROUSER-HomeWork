const size = Array.from(document.querySelectorAll('.font-size'));
const color = document.querySelectorAll('[data-text-color]');
const bg = document.querySelectorAll('[data-bg-color]');
const chenger = document.getElementById('book')

function lebal_DisAcitvate() {
size.forEach((item) => {
      if (item.classList.contains('font-size_active')) {
         item.classList.remove('font-size_active');
      }
   })
}

function colorDisActivate() {
   color.forEach((item) => {
      item.classList.contains('.color_active');
      item.classList.remove('color_active')
   })
};

function bgDisActivate() {
   bg.forEach((item) => {
      item.classList.contains('.color_active');
      item.classList.remove('color_active');
   })
}

size.forEach((item) => {
   item.addEventListener("click", (unlink) => {
      unlink.preventDefault();
      lebal_DisAcitvate();
      item.classList.add('font-size_active');
      if (item.classList.contains('font-size_big')) {
         chenger.classList.remove('book_fs-small')
         chenger.classList.add('book_fs-big')
      } else if (item.classList.contains('font-size_small')) {
         chenger.classList.remove('book_fs-big')
         chenger.classList.add('book_fs-small')
      } else {
         chenger.classList.remove('book_fs-big')
         chenger.classList.remove('book_fs-small')
      }
   })
});

color.forEach((item) => {
   item.addEventListener('click', (unlink) => {
      unlink.preventDefault();
      colorDisActivate()
      item.classList.add('color_active');
      if (item.classList.contains('text_color_gray')) {
         chenger.classList.remove('book_color-whitesmoke')
         chenger.classList.remove('book_color-black')
         chenger.classList.add('book_color-gray')
      }
      if (item.classList.contains('text_color_whitesmoke')) {
         chenger.classList.remove('book_color-gray')
         chenger.classList.remove('book_color-black')
         chenger.classList.add('book_color-whitesmoke')
      }
      if (item.classList.contains('text_color_black')) {
         chenger.classList.remove('book_color-whitesmoke')
         chenger.classList.remove('book_color-gray')
         chenger.classList.add('book_color-black')
      }
   })
});

bg.forEach(item => {
   item.addEventListener('click', (unlink) => {
      unlink.preventDefault();
      bgDisActivate();
      item.classList.add('color_active');
      if (item.classList.contains('bg_color_black')) {
         chenger.classList.remove('book_bg-white');
         chenger.classList.remove('book_bg-gray');
         chenger.classList.add('book_bg-black');
      }
      if (item.classList.contains('bg_color_white')) {
         chenger.classList.remove('book_bg-black');
         chenger.classList.remove('book_bg-gray');
         chenger.classList.add('book_bg-white');
      }
      if (item.classList.contains('bg_color_gray')) {
         chenger.classList.remove('book_bg-white');
         chenger.classList.remove('book_bg-black');
         chenger.classList.add('book_bg-gray');
      }
   })
});