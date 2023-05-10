//Create TASK class
export class Task {
  constructor(description, completed = false, id) {
    this.description = description;
    this.completed = completed;
    this.id = id;
  }

  displayTask() {
    return `${this.description}`;
  }
}

//Create tasksList class
export class TasksList {
  constructor(name) {
    this.tasks = [];
    this.name = name;
    this.id = this.tasks.length + 1;
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
    let storedTasks = localStorage.getItem(this.name);
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks).map(
        (task) => new Task(task.description, task.completed, task.id)
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
    let error = "Please provide a description";
    if (description !== "") {
      const task = new Task(description);
      this.tasks.push(task);
      this.saveTasksToLocalStorage();
      return this.tasks;
    } else {
      return error;
    }
  }

  readTask(id) {
    return this.tasks.filter((item) => item.id === id);
  }

  updateDescription(updatedDescrition) {
    this.description = updatedDescrition;
  }

  deleteTask(id) {
    this.filteredList = this.tasks.filter(
      (task) => task.id !== parseInt(id, 10)
    );
    this.tasks = this.filteredList;
    this.saveTasksToLocalStorage();
    return this.filteredList;
  }

  deleteCompletedTasks() {
    const tasks = this.getTasksFromLocalStorage();
    if (tasks) {
      return this.tasks.filter((task) => task.completed === true);
    }
  }
}

export const todaysList = new TasksList("To-Do today");
const tasks = todaysList.getTasksFromLocalStorage() || [];
export { tasks };