import _ from 'lodash';
import './style.css';
/* */
function component() {
  const element = document.createElement('div');
  // Lodash, now imported by this script
  element.innerHTML = _.join(['Clear', 'all', 'completed'], ' ');
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

/*
Create class here
  - Write a function to iterate over the tasks array and populate an HTML list item element for each task.
  - On page load render the dynamically created list of tasks in the dedicated placeholder. 
The list should appear in order of the `index` values for each task.
*/

//export const renderTasks = () => {
  tasks.forEach((task) => {
    let displayTasks = document.getElementById('display-list');
    let checkCompleted = document.createElement('INPUT');
    checkCompleted.setAttribute('type', 'checkbox')
    
    let taskActions = document.createElement('img');
    taskActions.classList.add('list-element');
    taskActions.setAttribute('id', 'action');
    
    displayTasks.appendChild(checkCompleted);

    displayTasks.innerHTML += `
      <ul class="list flex">
        <li class="list-element" id="description">
          ${task.description}
        </li>
    </ul>
    `
    displayTasks.appendChild(taskActions);

  })

//};