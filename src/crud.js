//Create TASK class
class Task {
  constructor(description, completed=false, id){
    this.description = description;
    this.completed = completed;
    this.id = id;
  }

  displayTask(){
    return `${this.description}`;
  }
}

//Create tasksList class
class TasksList {
  constructor(name){
    this.name = name;
    this.id = this.TasksList.length + 1;
    this.tasks = [];
    this.getTasksFromLocalStorage();
  }

  /*
  Add local sotrage methods
    3 main methods added here
  */
  saveTasksToLocalStorage(){
    localStorage.setItem(this.description, JSON.stringify(this.tasks));
  }

  getTasksFromLocalStorage(){
    let storedTasks = localStorage.getItem(this.description);
    if(storedTasks){
      this.tasks = JSON.parse(storedTasks).map((task) => new Task(task.description, task.completed, task.id));
    }
    return this.tasks;
  }

  getTaskByDescription(description){
    return this.tasks.filter((task) => task.description === description); 
  }

  /*
  Add CRUD methods
    4 main methods added here
  */
  createTask(){
    let error = 'Please provide a description'
    if(description !== ''){
      const task = new Task(
        description, 
        completed, 
        )
      this.tasks.push(task);
      this.saveTasksToLocalStorage();  
      return this.tasks;
    } else {
      return error;
    }
    
  }

  readTask(id){
    return this.tasks.filter(item => item.id === id);
  }

  updateDescription(updatedDescrition){
    this.description = updatedDescrition;    
  }

  deleteTask(id){
    this.filteredList = this.tasks.filter((task) => task.id !== parseInt(id, 10));
    this.saveTasksToLocalStorage();
    return this.filteredList;
  }

  deleteCompletedTasks(){
    const tasks = this.getTasksFromLocalStorage();
    if(tasks){
      return this.tasks.filter((task) => task.completed === true); 
    }  
  }
}
    
let todaysList = new TasksList('To-Do today');

