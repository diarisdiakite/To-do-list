import Task from './tasks.js';
import { tasks } from './TasksList.js';

const createTask = (myMockDescription) => {
  // const description = e.target.value.trim();

  if (myMockDescription === '') {
    
    } if (/* e.key === 'Enter' && */ myMockDescription !== '') {
      const task = new Task(myMockDescription);
      const updatedTasks = [...tasks, task];
      /* e.target.value = ''; */
      return updatedTasks;
    }
    return 'Please type a description for the new task';
};

export default createTask;