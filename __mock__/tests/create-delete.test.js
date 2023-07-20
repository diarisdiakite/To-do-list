import { tasks } from '../Tasks.js';
import createTask from '../createTask.js';
import { deleteTask } from '../deleteTask.js';

const myMockDescription = '';
const myMockDescription1 = 'My test created item';

describe('my add and delete functions tests', () => {
  test('should properly create a task', () => {
    expect(createTask(myMockDescription)).toBe('Please type a description for the new task');
    const updatedTasks = createTask(myMockDescription1);
    if (updatedTasks.length > 0) {
      expect(updatedTasks).toHaveLength(tasks.length + 1);
    }
  });

  test('properly delete a task', () => {
    const taskToDelete = tasks[0];
    const updatedTasks = deleteTask(tasks, taskToDelete);
    expect(updatedTasks).toHaveLength(tasks.length - 1);
  });
});