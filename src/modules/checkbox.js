import { todaysList, task } from './taskList.js';

export const createCheckbox = (taskId) => {
  const checkCompleted = document.createElement('input');
  checkCompleted.setAttribute('type', 'checkbox');
  checkCompleted.classList.add('list-element', 'checkbox');
  checkCompleted.setAttribute('id', `checkCompleted-${taskId}`);
  checkCompleted.checked = task.completed;
  return checkCompleted;
};
