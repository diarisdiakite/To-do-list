import { tasks } from './tasks.js';

export const listLength = tasks.length;
export const deleteTask = (tasks, task) => {
  const taskIndex = tasks.findIndex((t) => t.id === task.id);
  if (taskIndex > -1) {
    const updatedTasks = [...tasks];
    updatedTasks.splice(taskIndex, 1);
    return updatedTasks;
  }
  return tasks;
};

export default deleteTask;