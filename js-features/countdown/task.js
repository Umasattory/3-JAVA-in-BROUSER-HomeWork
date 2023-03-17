const count = document.getElementById('timer');
let counter = setInterval(() => {
   count.textContent -= 1;
   if (count.textContent < 0) {
      clearInterval(counter)
      count.textContent = 0;
      alert("Вы победили в конкурсе!")
   }
}, 300);

const hour = document.getElementById('hours');
const minute = document.getElementById('minutes');
const sec = document.getElementById('seconds');

let timeDown = setInterval(() => {
   sec.textContent--;


   if (sec.textContent < 0) {
      minute.textContent--
      sec.textContent = '59'
   }

   if (minute.textContent < 0) {
      hour.textContent--
      minute.textContent = '59'
   }

   if (hour.textContent == 0 && minute.textContent == 0 && sec.textContent == 0) {
      sec.textContent = '0';
      clearInterval(timeDown);
      alert("Вы снова победили в конкурсе!");
   }

   (sec.textContent.length < 2) ? sec.textContent = '0' + sec.textContent : sec.textContent;
   (minute.textContent.length < 2) ? minute.textContent = '0' + minute.textContent : minute.textContent;
   (hour.textContent.length < 2) ? hour.textContent = '0' + hour.textContent : hour.textContent;
}, 10);
