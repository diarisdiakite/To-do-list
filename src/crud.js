import Task from './task.js';

// Create tasksList class
export class TasksList {
  constructor(name) {
    this.name = name;
    this.tasks = [];
    this.getTasksFromLocalStorage();
  }

  /*
  Add local sotrage methods
    3 main methods added here
  */
  saveTasksToLocalStorage() {
    localStorage.setItem(this.name, JSON.stringify(this.tasks));
  }

  getTasksFromLocalStorage() {
    const storedTasks = localStorage.getItem(this.name);
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks).map(
        (task) => new Task(task.description, task.completed, task.id),
      );
    }
    return this.tasks;
  }

  getTaskByDescription(description) {
    return this.tasks.filter((task) => task.description === description);
  }

  /*
  Add CRUD methods
    4 main methods added here
  */
  createTask(description) {
    const error = 'Please provide a description';
    if (description !== '') {
      const task = new Task(description, false, this.tasks.length + 1);
      this.tasks.push(task);
      this.saveTasksToLocalStorage();
      return this.tasks;
    }
    return error;
  }

  readTask(id) {
    return this.tasks.filter((task) => task.id === id);
  }

  updateDescription(updatedDescrition) {
    this.description = updatedDescrition;
  }

  deleteTask(id) {
    const tasks = this.getTasksFromLocalStorage() || [];
    this.tasks = tasks.filter((task) => task.id !== parseInt(id, 10));
    this.saveTasksToLocalStorage();
    return this.tasks;
  }

  deleteCompletedTasks(id) {
    const tasks = this.getTasksFromLocalStorage() || [];
    this.tasksTodelete = [];
    this.tasksTodelete.push(tasks.filter((task) => task.id === parseInt(id, 10)));

    const filteredTasks = this.tasks.filter((task) => !task.completed);
    this.saveTasksToLocalStorage();
    return filteredTasks;
  }
}

export const todaysList = new TasksList('To-Do today');
const tasks = todaysList.getTasksFromLocalStorage() || [];
const task = new Task('my task');
export { tasks, task };
