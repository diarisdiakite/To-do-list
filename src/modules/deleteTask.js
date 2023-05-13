import { getTasksFromLocalStorage, saveTasksToLocalStorage } from './storage_functions.js';

function deleteTask(taskId) {
  const tasks = getTasksFromLocalStorage();
  // const taskToremove = tasks.filter((task) => task.id === taskId && task.completed===true)
  // console.log(taskToremove);
  tasks.splice(taskId, 1);
  tasks.forEach((task, index) => {
    task.index = index + 1;
  });
  saveTasksToLocalStorage(tasks);
}

export default deleteTask;
