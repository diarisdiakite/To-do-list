import Task from './task.js';
import { todaysList, tasks } from './taskList.js';

const createTask = (description) => {
  const error = 'Please provide a description';
  if (description !== '') {
    const task = new Task(description, false, tasks.length + 1);
    tasks.push(task);
    todaysList.saveTasksToLocalStorage();
  }
  return error;
};

export default createTask;
