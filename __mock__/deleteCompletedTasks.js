import { tasks } from "./TasksList";

const deleteCompletedTasks = () => {
  const incompleteTasks = tasks.filter((task) => !task.completed);
  tasks.length = 0;
  tasks.push(...incompleteTasks);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  //todaysList.saveTasksToLocalStorage();
};

export default deleteCompletedTasks;