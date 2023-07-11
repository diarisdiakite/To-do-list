import _ from 'lodash';
import './style.css';

const tasks = [
  {
    index: 1,
    description: 'Create html file and add html elements',
    completed: true,
  },
  {
    index: 2,
    description: 'Create js file and add js code',
    completed: true,
  },
  {
    index: 3,
    description: 'Create css file and add styling elements',
    completed: true,
  },
  {
    index: 4,
    description: 'Commit and push',
    completed: true,
  },
  {
    index: 5,
    description: 'Set project 2: Add CRUD',
    completed: true,
  },
  {
    index: 7,
    description: 'Set project 3: Add interactive',
    completed: true,
  },
];

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
    description.textContent = task.description;

    const taskActions = document.createElement('div');
    // taskActions.src = Delete;
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

const clearCompletedText = document.querySelector('#clear-completed-text');
clearCompletedText.innerHTML = _.join(['Clear', 'all', 'completed'], ' ');

// };