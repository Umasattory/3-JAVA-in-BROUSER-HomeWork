const loader = document.querySelector('#loader');
const items = document.querySelector('#items');
const url_courses = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses';

storGettingData();

let xhr = new XMLHttpRequest();
xhr.open('GET', url_courses, true);
xhr.send();
xhr.addEventListener('readystatechange', () => {
   items.innerHTML = "";
   if (xhr.readyState === xhr.DONE && xhr.status === 200) {
      const xhr_content = JSON.parse(xhr.responseText).response.Valute
      for (const [key, value] of Object.entries(xhr_content)) {
         items.insertAdjacentHTML('beforeEnd',
            `<div class="item">
               <div class="item__code">${key}</div>
               <div class="item__value">${value.Value}</div>
               <div class="item__currency">руб.</div>
            </div>`
         )
         localStorage.setItem('storSettingData', JSON.stringify(xhr_content));
      }
      loader.classList.remove('loader_active');
   }
});

function storGettingData() {
   if (localStorage.getItem('storSettingData') !== null) {
      const getData = localStorage.getItem('storSettingData');
      for (const [key, value] of Object.entries(getData)) {
         items.insertAdjacentHTML('beforeEnd',
            `<div class="item">
               <div class="item__code">${key}</div>
               <div class="item__value">${value.Value}</div>
               <div class="item__currency">руб.</div>
            </div>`
         )
         localStorage.clear()
      }
   }
}