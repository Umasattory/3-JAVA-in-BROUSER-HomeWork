const checks = Array.from(document.querySelectorAll('input.interest__check'));

checks.forEach((item) => {
   item.addEventListener('change', () => {
      checkDown(item);
      checkUp(item);
   })
});

// отметить всех детей элемента
const checkDown = (element) => {
   const eDown = element.closest('li').querySelectorAll('input');
   console.log(eDown);
   [...eDown].forEach((check) => {
      check.checked = element.checked;
      check.indeterminate = false;
   })
};

//отметить родителя элементов
const checkUp = (element) => {
   const sublings = element.closest('ul').querySelectorAll('input');
   if (element.closest('ul').closest('li')) {
      const parentCheck = element.closest('ul').closest('li').querySelector('input');
      if ([...sublings].every(subling => subling.checked)) {
         parentCheck.checked = true;
         parentCheck.indeterminate = false;
      } else if ([...sublings].some(sibling => sibling.checked)) {
         parentCheck.checked = false;
         parentCheck.indeterminate = true;
      } else {
         parentCheck.checked = false;
         parentCheck.indeterminate = false;
      }
   }
};

