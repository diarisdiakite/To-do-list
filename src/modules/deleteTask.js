import { todaysList } from './taskList.js';
import renderTasks from '../index.js';

function deleteTask(taskId) {
  const tasks = todaysList.getTasksFromLocalStorage();
  // const taskToremove = tasks.filter((task) => task.id === taskId && task.completed===true)
  // console.log(taskToremove);
  tasks.splice(taskId, 1);
  tasks.forEach((task, index) => {
    task.index = index + 1;
  });
  todaysList.saveTasksToLocalStorage(tasks);
  renderTasks();
}

export default deleteTask;
