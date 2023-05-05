const rotatArr = Array.from(document.querySelector('.rotator').children);
let rotatIndex = 0;

function clearActive() {
   rotatArr.forEach((item) => {
      if (item.classList.contains('rotator__case_active')) {
         item.classList.remove('rotator__case_active')
      }
   })
}


function styleActivate() {
   const styleActive = rotatArr[rotatIndex].dataset.color
   rotatArr[rotatIndex].style.color = styleActive;
}

const callback = () => {
   setInterval(() => {
      clearActive();
      if (rotatIndex + 1 === rotatArr.length) {
         rotatIndex = 0;
      } else {
         rotatIndex++;
      }
      rotatArr[rotatIndex].classList.add('rotator__case_active')
      styleActivate();
   }, 1000);
} 

document.addEventListener('DOMContentLoaded', callback);