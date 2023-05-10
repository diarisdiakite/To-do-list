import _ from 'lodash';
import './style.css';
import { todaysList, tasks } from './crud';
console.log(tasks);

const renderTasks = () => {
  const displayTasks = document.getElementById('display-list');
  displayTasks.innerHTML = '';

  tasks.sort((a, b) => a.index - b.index);

  tasks.forEach((task) => {
    const taskCard = document.createElement('ul');
    taskCard.classList.add('task-card', 'flex', 'row');

    const checkCompleted = document.createElement('input');
    checkCompleted.setAttribute('type', 'checkbox');
    checkCompleted.classList.add('list-element');
    checkCompleted.setAttribute('id', `checkbox-${task.index}`);
    checkCompleted.setAttribute('id', 'checkbox');
    checkCompleted.checked = task.completed;

    const description = document.createElement('li');
    description.classList.add('list-element');
    description.setAttribute('id', `description-${task.index}`);
    description.setAttribute('id', 'description');
    //description.textContent = task.description;

    const taskActions = document.createElement('div');
    taskActions.classList.add('list-element');
    taskActions.setAttribute('id', `action-${task.index}`);
    taskActions.setAttribute('id', 'action');

    taskCard.appendChild(checkCompleted);
    taskCard.appendChild(description);
    taskCard.appendChild(taskActions);

    displayTasks.appendChild(taskCard);
  });
};
window.addEventListener('load', renderTasks);
console.log(tasks)

//Add Task
const formDescription = document.getElementById('description');

formDescription.addEventListener('keydown', (e) => {
  debugger
  if(e.key === 'Enter'){
    e.preventDefault();
    todaysList.createTask(formDescription.value);
    formDescription.value = '';
    todaysList.saveTasksToLocalStorage();
    renderTasks();
  }
})

//Remove Task



//Update Task



//Delete Task

//
const clearCompletedText = document.querySelector('#clear-completed-text');
clearCompletedText.innerHTML = _.join(['Clear', 'all', 'completed'], ' ');

// };