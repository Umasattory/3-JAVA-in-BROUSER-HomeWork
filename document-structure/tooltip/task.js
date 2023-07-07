const hasTool = Array.from(document.querySelectorAll('.has-tooltip'));
const element = document.createElement('div');
element.className = "tooltip";
//---------------------------------------------//
element.dataset.position = "bottom";
//element.dataset.position = "top";
//element.dataset.position = "left";
//element.dataset.position = "right";
//---------------------------------------------//

hasTool.forEach((item) => {
   const hintText = item.getAttribute('title');
   item.addEventListener('click', (e) => {
      e.preventDefault()      
      element.style.display = "none";
      const coordinate = item.getBoundingClientRect();
      element.innerText = hintText;
      item.after(element);
      element.classList.toggle('tooltip_active')
      element.style.position = "absolute";
      element.style.display = "block";
      
      if (element.dataset.position === 'right') {
         element.style.left = (coordinate.x + item.offsetWidth) + 'px';
         element.style.marginTop = '-30px';
      } else if (element.dataset.position === 'left') {
         element.style.left = (coordinate.x - element.offsetWidth) + 'px';
         element.style.marginTop = '-30px';        
      } else if (element.dataset.position === 'top') {
         element.style.left = coordinate.x + 'px';
         element.style.marginTop = '-50px';
      } else {
         element.style.left = coordinate.x + 'px';
      }
   })
});