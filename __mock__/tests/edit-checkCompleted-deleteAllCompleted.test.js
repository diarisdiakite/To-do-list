import { JSDOM } from 'jsdom';
import { tasks } from '../tasks.js';
import deleteCompletedTasks from '../deleteAllCompleted.js';
import { createCheckbox, editCompleted } from '../checkCompletedTask.js';
//import editTask from '../editTask.js';

const dom = new JSDOM('<!DOCTYPE html><html><body><input id="taskInput"></input><div id="taskList"></div></body></html>');
global.document = dom.window.document;

beforeEach(() => {
  global.localStorage = {
    getItem: jest.fn(() => JSON.stringify(tasks)),
    setItem: jest.fn(),
  };
});

const mockTask = tasks[0];

const mockDescriptionElement = {
  value: 'Sample Task 2',
  addEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
  click: jest.fn(),
};

describe('Test checkCompletedTask, editTask and deleteAllCompletedTasks', () => {
  describe('Test checkCompletedTask', () => {
    it('should create a checkbox', () => {
      const mockCheckbox = createCheckbox(mockTask);
      expect(mockCheckbox.getAttribute('type')).toBe('checkbox');
      expect(mockCheckbox.getAttribute('id')).toBe(`checkCompleted-${mockTask.id}`);
    });
  
    it('should create a checkbox and checkCompletedTask', () => {
      const mockCheckbox = createCheckbox(mockTask);
      mockCheckbox.checked = mockTask.completed;
      editCompleted(mockTask);
      expect(mockCheckbox.getAttribute('type')).toBe('checkbox');
      expect(mockCheckbox.getAttribute('id')).toBe(`checkCompleted-${mockTask.id}`);
      expect(mockTask.completed).toBe(mockCheckbox.checked);
    });
  });

  describe('deleteCompletedTasks', () => {
    it('should delete all completed tasks from the task list', () => {
      deleteCompletedTasks(tasks);
  
      const updatedTasks = tasks.filter((task) => !task.completed);
      expect(localStorage.setItem).toHaveBeenCalled();
      expect(localStorage.setItem).toHaveBeenCalledWith('tasks', JSON.stringify(updatedTasks));
    });
  });

});
