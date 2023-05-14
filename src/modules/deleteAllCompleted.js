import { todaysList } from './taskList.js';

function deleteCompletedTasks(tasks) {
  tasks = todaysList.getTasksFromLocalStorage();
  tasks = tasks.filter((task) => !task.completed);
  tasks.forEach((task, index) => {
    task.index = index + 1;
  });
  todaysList.saveTasksToLocalStorage(tasks);
}

export default deleteCompletedTasks;
