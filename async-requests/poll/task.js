const poll_title = document.querySelector('#poll__title');
const poll_answers = document.querySelector('#poll__answers');
let summary = 0;


let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll', true);
xhr.send()

xhr.addEventListener('readystatechange', () => {
   if (xhr.readyState === xhr.DONE && xhr.status == 200) {
      const xhr_content = JSON.parse(xhr.responseText)
      poll_title.textContent = xhr_content.data.title;
      for (let i = 0; i < xhr_content.data.answers.length; i++) {
         poll_answers.insertAdjacentHTML('beforeEnd', `<button class="poll__answer" style="margin-right:5px;">${xhr_content.data.answers[i]}</button`)
      }

      const btns = Array.from(document.querySelectorAll('.poll__answer'));
      btns.forEach((item) => {
         item.addEventListener('click', (e) => {
            e.preventDefault();
            alert("Спасибо, Ваш голос засчитан")
            let xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr.send(`vote=${xhr_content.id}&answer=${xhr_content.data.answers.indexOf(item.textContent)}`);
            xhr.addEventListener('readystatechange', () => {
               if (xhr.readyState == xhr.DONE && xhr.status == 201) {
                  const XHR_elements = JSON.parse(xhr.responseText);
                  XHR_elements.stat.forEach((item) => { summary = summary + item.votes });                  
                  poll_answers.innerHTML = "";
                  for (let i = 0; i < XHR_elements.stat.length; i++) {
                     poll_answers.innerHTML += `<div>${XHR_elements.stat[i].answer}: <b>${((XHR_elements.stat[i].votes / summary) * 100).toFixed(2)}%</b></div>`
                  }
               }
            })
         })
      })
   }
});



