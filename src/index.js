import _ from 'lodash';
import './style.css';
import { todaysList, tasks, task } from './crud.js';

const renderTasks = () => {
  const displayTasks = document.getElementById('display-list');
  displayTasks.innerHTML = '';

  tasks.sort((a, b) => a.index - b.index);

  const formDescription = document.getElementById('descriptionInput');

  formDescription.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      todaysList.createTask(formDescription.value, task.id = tasks.length + 1);
      formDescription.value = '';
      todaysList.saveTasksToLocalStorage();
      renderTasks();
    }
  });

  tasks.forEach((task) => {
    const taskId = tasks.length + 1;
    const taskCard = document.createElement('ul');
    taskCard.classList.add('task-card', 'flex', 'row');
    taskCard.setAttribute('id', `taskCard-${taskId}`);

    const checkCompleted = document.createElement('input');
    checkCompleted.setAttribute('type', 'checkbox');
    checkCompleted.classList.add('list-element', 'checkbox');
    checkCompleted.setAttribute('id', `checkbox-${taskId}`);
    checkCompleted.checked = task.completed;

    checkCompleted.addEventListener('change', () => {
      task.completed = checkCompleted.checked;
      todaysList.saveTasksToLocalStorage();
    });

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

    // Create a showRemove button
    // hide the showRemove Button
    // remove hidden on event listener clik
    const showRemove = document.createElement('button');
    showRemove.classList.add('list-element', 'showRemove', 'hidden');
    showRemove.setAttribute('id', `showRemove-${taskId}`);

    // Add nested event listener for deleting
    taskActions.addEventListener('click', () => {
      if (taskActions.classList.contains('action')) {
        taskActions.classList.add('hidden');
        showRemove.classList.remove('hidden');
        showRemove.setAttribute('id', `showRemove-${taskId}`);
        taskCard.appendChild(showRemove);

        // second AddEventListener comes here
        showRemove.addEventListener('click', (e, tasks) => {
          if (checkCompleted.checked) {
            // const { taskId } = e.target.dataset;
            todaysList.deleteTask(taskId, tasks);
            const taskToRemove = document.getElementById(`taskCard-${taskId}`);
            if (taskToRemove) {
              displayTasks.removeChild(taskToRemove);
            }
          } else {
            showRemove.classList.add('hidden');
            taskActions.classList.remove('hidden');
            taskActions.setAttribute('id', 'action');
          }
        });
        taskActions.setAttribute('id', 'action');
      }
    });

    taskCard.appendChild(checkCompleted);
    taskCard.appendChild(descriptionElement);
    taskCard.appendChild(taskActions);
    taskCard.appendChild(showRemove);

    displayTasks.appendChild(taskCard);
  });
};

window.addEventListener('load', renderTasks);

// All tasks
const clearCompletedText = document.querySelector('#clear-completed-text');
clearCompletedText.innerHTML = _.join(['Clear', 'all', 'completed'], ' ');

// Delete All completed Tasks
const clearAllCompleted = document.getElementById('clear-completed-link');
clearAllCompleted.addEventListener('click', todaysList.deleteCompletedTasks);
