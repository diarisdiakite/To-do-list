import Task from './task.js';
import { todaysList, tasks, task } from './taskList.js';

export const createCheckbox = (taskId) => {
  const checkCompleted = document.createElement('input');
  checkCompleted.setAttribute('type', 'checkbox');
  checkCompleted.classList.add('list-element', 'checkbox');
  checkCompleted.setAttribute('id', `checkCompleted-${taskId}`);
  checkCompleted.checked = task.completed;
  return checkCompleted;
};

export const checkCompletedFunction = (task, checkCompletedElement, tasksList) => {
  checkCompletedElement.addEventListener('change', () => {
    task.completed = checkCompletedElement.value === 'on';
    todaysList.saveTasksToLocalStorage();
  });
};


/*
export const checkCompletedFunction = (task, checkCompleted) => {
  task.completed = checkCompleted.checked;
  todaysList.saveTasksToLocalStorage();
};


const checkCompletedFunction = (task, checkCompletedElement, tasksList) => {
  checkCompletedElement.addEventListener('change', () => {
    task.completed = checkCompletedElement.checked;
    saveTasksToLocalStorage();
  });
};

export default checkCompletedFunction;

*/