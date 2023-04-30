     const form = document.getElementById('taskAdd');
     const input = document.getElementById('newTask');
     const taskList = document.getElementById('taskList');


     function addTask(event) {
         event.preventDefault();

         const taskText = input.value.trim();

         if (taskText) {
             const taskItem = document.createElement('li');
             taskItem.textContent = taskText;
             taskList.appendChild(taskItem);
             input.value = '';
             input.focus();
         }
     }


     function toggleTask(event) {
         if (event.target.tagName === 'LI') {
             event.target.classList.toggle('completed');
         }
     }

     form.addEventListener('submit', addTask);
     taskList.addEventListener('dblclick', toggleTask);