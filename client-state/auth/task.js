const btn = document.querySelector('#signin__btn');
const signin = document.querySelector('#signin');
const url = 'https://students.netoservices.ru/nestjs-backend/auth.php'

btn.addEventListener('click', (e) => {
   e.preventDefault()
   const xhr = new XMLHttpRequest();
   const formData = new FormData(document.forms.signin__form);
   xhr.open('POST', url);
   xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
   xhr.addEventListener('readystatechange', () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
         console.log(xhr.responseText)
      }
   })
   
   xhr.send(formData)
})