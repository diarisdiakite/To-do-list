export default class Task {
  constructor(description, completed = false, id) {
    this.description = description;
    this.completed = completed;
    this.id = id;
  }
}