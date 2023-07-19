import Task, { tasks } from './tasks.js';

const createTaskToDOM = (e) => {
  const description = e.target.value.trim();

  if (e.key === 'Enter' && description !== '') {
    const task = new Task(description);
    e.target.value = '';
    const taskList = document.getElementById('taskList');
    const taskElement = document.createElement('li'); 
    taskElement.textContent = description;
    taskList.appendChild(taskElement);

    tasks.push(task); 

    return tasks; 
  }
};

export default createTaskToDOM;