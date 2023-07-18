import _ from 'lodash';
import './style.css';
import { todaysList, tasks } from './modules/TasksList.js';
import createTask from './modules/createTask.js';
import deleteTask from './modules/deleteTask.js';
import { createCheckbox, checkCompletedFunction } from './modules/checkCompleted.js';
import deleteCompletedTasks from './modules/deleteAllCompleted.js';

const renderTasks = () => {
  const displayTasks = document.getElementById('display-list');
  displayTasks.innerHTML = '';

  tasks.sort((a, b) => a.index - b.index);

  const formDescription = document.getElementById('descriptionInput');

  formDescription.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      createTask(formDescription.value);
      formDescription.value = '';
      todaysList.saveTasksToLocalStorage();
      renderTasks();
    }
  });

  tasks.forEach((task) => {
    const taskId = task.id;
    const taskCard = document.createElement('li');
    taskCard.classList.add('task-card', 'flex', 'row');
    taskCard.setAttribute('id', `taskCard-${taskId}`);

    const checkCompleted = createCheckbox(task.id);
    checkCompleted.checked = task.completed;
    checkCompletedFunction(task, checkCompleted, todaysList);

    let descriptionElement;
    if (task.isEditing) {
      descriptionElement = document.createElement('input');
      descriptionElement.setAttribute('type', 'text');
      descriptionElement.setAttribute('id', `description-${taskId}`);
      descriptionElement.classList.add('list-element', 'description');
      descriptionElement.value = task.description;

      descriptionElement.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          task.description = descriptionElement.value;
          task.isEditing = false;
          todaysList.saveTasksToLocalStorage();
          renderTasks();
        } else if (e.key === 'Escape') {
          task.isEditing = false;
          todaysList.saveTasksToLocalStorage();
          renderTasks();
        }
      });
    } else {
      descriptionElement = document.createElement('label');
      descriptionElement.classList.add('list-element', 'description');
      descriptionElement.setAttribute('id', `description-${task.id}`);
      descriptionElement.textContent = task.description;

      descriptionElement.addEventListener('click', () => {
        task.isEditing = true;
        todaysList.saveTasksToLocalStorage();
        renderTasks();
      });
    }
    // Add nested event listener for deleting
    const taskActions = document.createElement('button');
    taskActions.classList.add('list-element', 'action');
    taskActions.setAttribute('id', `action-${taskId}`);

    taskActions.addEventListener('mouseover', () => {
      if (taskActions.classList.contains('action')) {
        taskActions.classList.remove('action');
        taskActions.classList.add('showRemove');
        taskCard.classList.add('blurred');
      }
      taskActions.addEventListener('mouseout', () => {
        taskCard.classList.remove('blurred');
        taskActions.classList.remove('showRemove');
        taskActions.classList.add('action');
        taskActions.setAttribute('id', 'action');
      });
    });

    taskActions.addEventListener('click', (e) => {
      deleteTask(e, tasks, task);
      renderTasks();
    });

    taskCard.appendChild(checkCompleted);
    taskCard.appendChild(descriptionElement);
    taskCard.appendChild(taskActions);

    displayTasks.appendChild(taskCard);
  });
};
renderTasks();

window.addEventListener('load', renderTasks);

// All tasks
const clearCompletedText = document.querySelector('#clear-completed-text');
clearCompletedText.innerHTML = _.join(['Clear', 'all', 'completed'], ' ');

// Delete All completed Tasks
const clearAllCompleted = document.getElementById('clear-completed-link');
clearAllCompleted.addEventListener('click', deleteCompletedTasks);

export default renderTasks;