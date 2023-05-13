import { task } from '../crud.js';
import { saveTasksToLocalStorage } from './storage_functions.js';

export const createCheckbox = () => {
  const checkCompleted = document.createElement('input');
  checkCompleted.setAttribute('type', 'checkbox');
  checkCompleted.classList.add('list-element', 'checkbox');
  checkCompleted.checked = task.completed;
};

export const checkCompletedFunction = (task, checkCompleted) => {
  task.completed = checkCompleted.checked;
  saveTasksToLocalStorage();
};

/*
const checkCompletedFunction = (task, checkCompletedElement, tasksList) => {
  checkCompletedElement.addEventListener('change', () => {
    task.completed = checkCompletedElement.checked;
    saveTasksToLocalStorage();
  });
};

export default checkCompletedFunction;

*/