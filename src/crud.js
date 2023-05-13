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

  getTasksFromLocalStorage() {
    const storedTasks = localStorage.getItem(this.name);
    if (storedTasks !== undefined && storedTasks !== null) {
      this.tasks = JSON.parse(storedTasks).map(
        (task) => new Task(task.description, task.completed, task.id),
      );
    }
    return this.tasks;
  }

  saveTasksToLocalStorage() {
    localStorage.setItem(this.name, JSON.stringify(this.tasks));
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
