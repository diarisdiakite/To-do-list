import { todaysList, tasks } from './taskList.js';

const deleteCompletedTasks = () => {
  const incompleteTasks = tasks.filter((task) => !task.completed);
  tasks.length = 0;
  tasks.push(...incompleteTasks);
  todaysList.saveTasksToLocalStorage();
};

export default deleteCompletedTasks;

/*
const deleteCompletedTasks = () => {
  const completedTasks = todaysList.getTasksFromLocalStorage().filter((task) => task.completed);
  
  tasks.filter((task) => !task.completed);
  tasks.forEach((task, index) => {
    task.index = index + 1;
  });
  
  if (completedTasks.length > 0) {
    localStorage.removeItem('completedTasks');
  }

  completedTasks.forEach((completedTask) => {
    const index = tasks.indexOf(completedTask);
    if (index !== -1) {
      tasks.splice(index, 1);
    }
  });

  todaysList.saveTasksToLocalStorage(tasks);
  renderTasks();
}
*/