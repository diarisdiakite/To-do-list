import { todaysList } from './TaskList.js';

const deleteTask = (e, tasks, task) => {
  const taskIndex = tasks.indexOf(task);
  if (taskIndex > -1) {
    tasks.splice(taskIndex, 1);
    todaysList.saveTasksToLocalStorage(tasks);
    const listItem = e.target.closest('.list-element');
    listItem.remove();
  }
};

export default deleteTask;
