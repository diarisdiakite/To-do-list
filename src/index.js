import _ from 'lodash';
import './style.css';
/* */
function component() {
  const element = document.createElement('div');
  // Lodash, now imported by this script
  element.innerHTML = _.join(['To-do', 'list'], ' ');
  element.classList.add('hello');
  return element;
}
document.body.appendChild(component());

/*
Create an **index.js** file and set an array of some simple *to do tasks* (array of objects).
with each task object containing the three keys:
  1. description [`string`].
  2. completed [`bool`].
  3. index: [`number`].
*/

export const tasks = [
  {
    index: 1,
    description: 'Create html file and add html elements',
    completed: true,
  },
  {
    index: 1,
    description: 'Create js file and add js code',
    completed: true,
  },
  {
    index: 1,
    description: 'Create css file and add styling elements',
    completed: true,
  },
];

//Create class here

export const renderTasks = () => {
  tasks.forEach((task) => {
    let taskCard = document.getElementById('task-card');
    let checkCompleted = document.createElement('p');
    let taskActions = document.createElement('img');
    taskActions.classList.add('list-element');
    taskActions.setAttribute('id', 'action');
    
    //taskCard.innerHTML += checkCompleted;
    taskCard.innerHTML += `
      <ul class="list flex">
      <li class="list-element" id="checkbox">
        <checkbox>${task.completed}</checkbox>
      </li>
      <li class="list-element" id="description">
        ${task.description}
      </li>
    </ul>
    `
    taskCard.innerHTML += taskActions;

  })

};