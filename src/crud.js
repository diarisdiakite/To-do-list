import Task from './task.js';

// Create tasksList class
export class TasksList {
  constructor(name) {
    this.name = name;
    this.id = this.tasks.length + 1;
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
    this.filteredList = this.tasks.filter(
      (task) => task.id !== parseInt(id, 10),
    );
    this.tasks = this.filteredList;
    this.saveTasksToLocalStorage();
    return this.filteredList;
  }

  deleteCompletedTasks() {
    // const tasks = this.getTasksFromLocalStorage();
    const tasks = this.tasks.filter((task) => !task.completed);
    this.saveTasksToLocalStorage();
    console.log(localStorage);
    return tasks;
  }
}

export const todaysList = new TasksList('To-Do today');
const tasks = todaysList.getTasksFromLocalStorage() || [];
const task = new Task('my task');
export { tasks, task };