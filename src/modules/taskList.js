import Task from './task.js';

// Create tasksList class
export class TasksList {
  constructor(name) {
    this.name = name;
    this.tasks = [];
    this.getTasksFromLocalStorage();
  }

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
    return [];
  }

  // to modularize but after checkbox
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
}

export const todaysList = new TasksList('To-Do today');
const tasks = todaysList.getTasksFromLocalStorage() ?? [];
const task = new Task('my task');
export { tasks, task };