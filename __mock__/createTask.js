import Task, { tasks } from './tasks.js';


const createTask = (my_mock_description) => {
  //const description = e.target.value.trim();
  
  if (my_mock_description === ''){
    return "Please type a description for the new task"
  }else if (/* e.key === 'Enter' && */ my_mock_description !== '') {
    const task = new Task(my_mock_description);
    const updatedTasks = [...tasks, task];
    /* e.target.value = ''; */
    return updatedTasks;
  }
};

export default createTask;