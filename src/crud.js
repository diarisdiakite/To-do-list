//Create TASK class
class Task {
  constructor(description, completed=false){
    this.description = document.getElementById('description').value;
    this.completed = completed;
    this.id = this.task.length + 1;
  }
}

//Create tasksList class
class TasksList {
  constructor(name){
    this.name = name;
    this.id = this.TasksList.length + 1;
    this.tasks = [];
  }

  //Add local sotrage methods
  addToLocal(task){
    this.tasks.push(JSON.stringify(task));
  }

  getAllFromLocal(){
    if(storedTasks){
      this.tasks = JSON.parse()||[]; //Real syntax
      return this.tasks;
    }
    
  }

  getAllCompleted(){
    this.tasks = tasks.filter(item => this.task.completed = true);
    return this.tasks;
  }

  //Add crud 
  createTask(){
    let error = 'Please provide a description'
    if(description !== ''){
      const task = new Task(
        this.description = document.getElementById('description').value,
        this.id = this.tasks.length + 1,
        )  
      return this.TasksList;
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
    this.filteredList = this.tasks.filter(item => item.id != id);
    return this.filteredList;
  }
}
    
let todaysList = new TasksList('To-Do today');

