const area = document.querySelector('#editor');
const clearBtn = document.querySelector('.clear');
let text;
document.addEventListener('keypress', (e) => {
   if (e.code == "Space") {
      localStorage.setItem('mamory', JSON.stringify(area.value))
   }
})

clearBtn.addEventListener('click', () => {
   area.value = '';
   localStorage.clear()
});

window.addEventListener('load', () => {
   if (localStorage.mamory) {
      text = localStorage.mamory
      area.value = JSON.parse(text);
   }
});
