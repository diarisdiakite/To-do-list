import { todaysList, tasks } from './taskList.js';

const deleteCompletedTasks = () => {
  const incompleteTasks = tasks.filter((task) => !task.completed);
  tasks.length = 0;
  tasks.push(...incompleteTasks);
  todaysList.saveTasksToLocalStorage();
};

export default deleteCompletedTasks;