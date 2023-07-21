import { todaysList } from './TasksList.js';

export const createCheckbox = (task) => {
  const checkCompleted = document.createElement('input');
  checkCompleted.setAttribute('type', 'checkbox');
  checkCompleted.classList.add('list-element', 'checkbox');
  checkCompleted.setAttribute('id', `checkCompleted-${task.id}`);
  checkCompleted.checked = task.completed;
  return checkCompleted;
};

export const checkCompletedFunction = (task, key, checkCompleted) => {
  if (key === 'Enter') {
  // checkCompletedElement.addEventListener('change', () => {
    task.completed = checkCompleted.checked;
    todaysList.saveTasksToLocalStorage();
  // });
  } else {
    task.completed = checkCompleted;
  }
  return task.completed;
};

export const editCompleted = (task) => {
  const taskId = task.id;
  const taskCard = document.createElement('li');
  taskCard.classList.add('task-card', 'flex', 'row');
  taskCard.setAttribute('id', `taskCard-${taskId}`);

  const checkCompleted = createCheckbox(task.id);
  // checkCompleted.checked = task.completed;
  checkCompletedFunction(task, checkCompleted);
};
