const taskBlock = document.querySelector('.tasks');
const input = taskBlock.querySelector('.tasks__input');
const button = taskBlock.querySelector('.tasks__add');
const taskList = taskBlock.querySelector('.tasks__list');
//----------------------------------------------------------------------//
window.addEventListener('load', () => {
   for (let i = 0; i < localStorage.length; i++) {
      const newTask = document.createElement('div');
      newTask.className = "task";
      newTask.insertAdjacentHTML('afterbegin', `<div class="task__title">${localStorage.getItem('task: ' + i)}</div>`);
      newTask.insertAdjacentHTML('beforeend', '<a href="#" class="task__remove">&times;</a>');
      taskList.append(newTask);
   }
})
//----------------------------------------------------------------------//
input.addEventListener('keypress', (e) => {
   if (input.value && e.keyCode === 13) {
      add_task();
      e.preventDefault()
   }
})
//----------------------------------------------------------------------//
button.addEventListener('click', () => {
   if (input.value !== '') {
      button.type = "button"
      add_task();
   } else {
      button.type = "submit";
   }
})
//----------------------------------------------------------------------//
function add_task() {
   const newTask = document.createElement('div');
   newTask.className = "task";
   newTask.insertAdjacentHTML('afterbegin', `<div class="task__title">${input.value}</div>`);
   newTask.insertAdjacentHTML('beforeend', '<a href="#" class="task__remove">&times;</a>');
   taskList.append(newTask);
   input.value = '';
   input.focus();
   let keyName = 'task: ' + localStorage.length;
   localStorage.setItem(keyName, newTask.querySelector('.task__title').innerText);

   const taskRemove = newTask.querySelector('.task__remove');
   taskRemove.addEventListener('click', () => {
      taskRemove.closest('.task').remove();
      localStorage.removeItem(keyName)
   })
};
//----------------------------------------------------------------------//


