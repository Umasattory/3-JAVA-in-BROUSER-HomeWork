const reveal = document.querySelectorAll('.reveal');

const isVisible = (el) => {
   const { top, bottom } = el.getBoundingClientRect();
   if (bottom < 0) {
      return false;
   }
   if (top > window.innerHeight) {
      return false;
   }
   return true;
}

reveal.forEach((item) => {
   window.addEventListener("scroll", () => {
      if (isVisible(item) == true) {
         setTimeout(() => {
            item.classList.add('reveal_active')
         }, 600);
      } else {
         item.classList.remove('reveal_active')
      }
   })
});

// innerHeight/innerWidth - высота области просмотра экрана 
// (исключает панели браузера и т.д.только рабочая область...
// область консоли и тд.)