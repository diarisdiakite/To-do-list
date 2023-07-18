import { task, todaysList } from './TaskList.js';

export const createCheckbox = (taskId) => {
  const checkCompleted = document.createElement('input');
  checkCompleted.setAttribute('type', 'checkbox');
  checkCompleted.classList.add('list-element', 'checkbox');
  checkCompleted.setAttribute('id', `checkCompleted-${taskId}`);
  checkCompleted.checked = task.completed;
  return checkCompleted;
};

export const checkCompletedFunction = (task, checkCompletedElement) => {
  checkCompletedElement.addEventListener('change', () => {
    task.completed = checkCompletedElement.checked;
    todaysList.saveTasksToLocalStorage();
  });
};
