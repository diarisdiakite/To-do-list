import Task from './tasks.js';
import { tasks } from './TasksList.js';

const createTask = (myMockDescription) => {
  // const description = e.target.value.trim();
  let result;
  if (myMockDescription === '') {
    result = 'Please type a description for the new task';
  } else /* (/* e.key === 'Enter' && * myMockDescription !== '') */ {
    const task = new Task(myMockDescription);
    const updatedTasks = [...tasks, task];
    /* e.target.value = ''; */
    result = updatedTasks;
  }
  return result;
};

export default createTask;