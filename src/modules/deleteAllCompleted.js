import { todaysList } from './taskList.js';
import renderTasks from '../index.js';

function deleteCompletedTasks(tasks) {
  tasks = todaysList.getTasksFromLocalStorage();
  tasks = tasks.filter((task) => !task.completed);
  tasks.forEach((task, index) => {
    task.index = index + 1;
  });
  todaysList.saveTasksToLocalStorage(tasks);
  renderTasks();
}

export default deleteCompletedTasks;
