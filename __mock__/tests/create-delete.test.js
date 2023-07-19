import { tasks } from "../tasks";
import createTask from "../createTask";
import { deleteTask } from '../deleteTask.js';

const my_mock_description  = '';
const my_mock_description1 = 'My test created item';

describe('my add and delete functions tests', () => {
  test('should properly create a task', () => { 
    expect(createTask(my_mock_description)).toBe("Please type a description for the new task");
    const updatedTasks = createTask(my_mock_description1);
    if(updatedTasks.length > 0){
      expect(updatedTasks).toHaveLength(tasks.length + 1)
    }
    
  })

  test('properly delete a task', () => {
    const taskToDelete = tasks[0];
    const updatedTasks = deleteTask(tasks, taskToDelete);
    expect(updatedTasks).toHaveLength(tasks.length - 1);
  })
})