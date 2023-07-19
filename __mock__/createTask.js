import Task, { tasks } from './tasks.js';

const createTask = (myMockDescription) => {
  // const description = e.target.value.trim();

  if (myMockDescription === '') {
    return 'Please type a description for the new task';
  } if (/* e.key === 'Enter' && */ myMockDescription !== '') {
    const task = new Task(myMockDescription);
    const updatedTasks = [...tasks, task];
    /* e.target.value = ''; */
    return updatedTasks;
  }
  return null;
};

export default createTask;