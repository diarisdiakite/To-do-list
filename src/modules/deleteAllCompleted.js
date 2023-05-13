import { getTasksFromLocalStorage, saveTasksToLocalStorage } from './storage_functions.js';

function deleteCompletedTasks(tasks) {
  tasks = getTasksFromLocalStorage();
  tasks = tasks.filter((task) => !task.completed);
  tasks.forEach((task, index) => {
    task.index = index + 1;
  });
  saveTasksToLocalStorage(tasks);
}

export default deleteCompletedTasks;
