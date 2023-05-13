import { getTasksFromLocalStorage, saveTasksToLocalStorage } from './storage_functions.js';

function deleteTask(id) {
  const tasks = getTasksFromLocalStorage();
  tasks.splice(id, 1);
  tasks.forEach((task, id) => {
    task.id = id + 1;
  });
  saveTasksToLocalStorage(tasks);
}

export default deleteTask;
