import { tasks } from '../TasksList.js';
import createTask from '../createTask.js';
import { deleteTask } from '../deleteTask.js';

const myMockDescription = '';
const myMockDescription1 = 'My test created item';

describe('my add and delete functions tests', () => {
  test('should properly create a task', () => {
    
    const updatedTasks = createTask(myMockDescription1);
    const initialLength = tasks.length
    console.log(initialLength)
    if (updatedTasks.length > 0) {
      expect(updatedTasks).toHaveLength(Number(tasks.length + 1)); 
      const finalLenght = tasks.length
      console.log(finalLenght)
    }
    expect(createTask(myMockDescription)).toBe('Please type a description for the new task');
  });

  const taskToDeleteIndex = -1 //Task to delete not found)
  test('properly delete a task', () => {
    const taskToDelete = tasks[0];
    const updatedTasks = deleteTask(tasks, taskToDelete);
    expect(updatedTasks).toHaveLength(tasks.length - 1);
    expect(deleteTask(tasks, taskToDeleteIndex)).toHaveLength(tasks.length);  
  });
});