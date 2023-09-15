const btn = document.querySelector('#signin__btn');
const signin = document.querySelector('#signin');
const url = 'https://students.netoservices.ru/nestjs-backend/auth';
const welcome = document.querySelector('#welcome');

btn.addEventListener('click', (e) => {
   e.preventDefault()
   const xhr = new XMLHttpRequest();
   const formData = new FormData(document.forms.signin__form);
   xhr.open('POST', url);
   xhr.addEventListener('readystatechange', () => {
      localStorage.clear()
      if (xhr.readyState === xhr.DONE && xhr.status < 300) {
         localStorage.setItem('object', xhr.responseText);
      }
      const userID = JSON.parse(localStorage.getItem('object'));
      if (userID.success === false) {
         location.reload()
         alert('Неверный логин/пароль!');
      } else {
         welcome.classList.add('welcome_active');
         welcome.querySelector('#user_id').innerText = `${userID.user_id}`
         document.querySelectorAll('.control').forEach((item) => {
            item.value = "";
         })
      }
   })
   xhr.send(formData);
});