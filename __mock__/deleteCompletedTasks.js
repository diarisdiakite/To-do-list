import { tasks } from './tasks.js';
// import { todaysList, TasksList } from "./taskList";

const deleteCompletedTasks = () => {
  const incompleteTasks = tasks.filter((task) => !task.completed);
  tasks.length = 0;
  tasks.push(...incompleteTasks);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  // todaysList.saveTasksToLocalStorage();
};

export default deleteCompletedTasks;