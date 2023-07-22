export default class Task {
  constructor(description, completed = false, id) {
    this.description = description;
    this.completed = completed;
    this.id = id;
  }
}

export const task = new Task();

export const tasks = [
  {
    id: 1,
    description: 'my first task',
    completed: false,
  },
  {
    id: 2,
    description: 'my second task',
    completed: true,
  },
  {
    id: 3,
    description: 'my third task',
    completed: true,
  },
  {
    id: 4,
    description: 'my fourth task',
    completed: true,
  },
  {
    id: 5,
    description: 'my fith task',
    completed: true,
  },
];

export const myTasks = [
  {
    id: 1,
    description: 'my first task',
    completed: false,
  },
  {
    id: 2,
    description: 'my second task',
    completed: true,
  },
  {
    id: 3,
    description: 'my third task',
    completed: true,
  },
  {
    id: 4,
    description: 'my fourth task',
    completed: true,
  },
  {
    id: 5,
    description: 'my fith task',
    completed: true,
  },
];
