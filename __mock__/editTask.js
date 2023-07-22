// import { tasks } from './tasks';
import { todaysList, tasks } from './TasksList.js';

const editTask = (task, key, descriptionElement) => {
  const taskId = task.id;
  descriptionElement = document.createElement('input');
  descriptionElement.id = `description-${taskId}`;
  descriptionElement.value = task.description;

  if (key === 'Enter') {
    task.description = descriptionElement.value;
    task.isEditing = false;

    todaysList.saveTasksToLocalStorage();
  } else if (key === 'Escape') {
    task.isEditing = false;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    // todaysList.saveTasksToLocalStorage();
  }

  return descriptionElement;
};

export default editTask;
