import { task, tasks } from "./tasks";
import deleteTask from './deleteTask.js';

const createTaskCard = (task) => {
  const taskId = task.id;
  const taskCard = document.createElement('li');
  taskCard.classList.add('task-card', 'flex', 'row');
  taskCard.setAttribute('id', `taskCard-${taskId}`);

  const checkCompleted = createCheckbox(task.id);
  checkCompleted.checked = task.completed;
  checkCompletedFunction(task, checkCompleted);

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
        // todaysList.saveTasksToLocalStorage();
        // renderTasks();
      } else if (e.key === 'Escape') {
        task.isEditing = false;
        // todaysList.saveTasksToLocalStorage();
        // renderTasks();
      }
    });
  } else {
    descriptionElement = document.createElement('label');
    descriptionElement.classList.add('list-element', 'description');
    descriptionElement.setAttribute('id', `description-${task.id}`);
    descriptionElement.textContent = task.description;

    descriptionElement.addEventListener('click', () => {
      task.isEditing = true;
      // todaysList.saveTasksToLocalStorage();
      // renderTasks();
    });
  }

  const taskActions = document.createElement('button');
  taskActions.classList.add('list-element', 'action');
  taskActions.setAttribute('id', `action-${taskId}`);

  taskActions.addEventListener('mouseover', () => {
    if (taskActions.classList.contains('action')) {
      taskActions.classList.remove('action');
      taskActions.classList.add('showRemove');
      taskCard.classList.add('blurred');
    }
  });

  taskActions.addEventListener('mouseout', () => {
    taskCard.classList.remove('blurred');
    taskActions.classList.remove('showRemove');
    taskActions.classList.add('action');
    taskActions.setAttribute('id', 'action');
  });

  taskActions.addEventListener('click', (e) => {
    deleteTask(e, tasks, task);
    // renderTasks();
  });

  taskCard.appendChild(checkCompleted);
  taskCard.appendChild(descriptionElement);
  taskCard.appendChild(taskActions);

  return taskCard;
};

export default createTaskCard;

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
    // todaysList.saveTasksToLocalStorage();
  });
};

export const deleteCompletedTasks = () => {
  const incompleteTasks = tasks.filter((task) => !task.completed);
  tasks.length = 0;
  tasks.push(...incompleteTasks);
  // todaysList.saveTasksToLocalStorage();
};
  
