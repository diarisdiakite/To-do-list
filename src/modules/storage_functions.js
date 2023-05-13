export const saveTasksToLocalStorage = (tasks) => {
  localStorage.setItem('To-Do today', JSON.stringify(tasks));
};

export const getTasksFromLocalStorage = (name) => {
  const storedTasks = localStorage.getItem(name);
  if (storedTasks !== undefined && storedTasks !== null) {
    return JSON.parse(storedTasks);// .map(
    // (task) => new Task(task.description, task.completed, task.id),
    // );
  }
  return [];
};
