import { JSDOM } from 'jsdom';
import { tasks } from '../TasksList.js';
import deleteCompletedTasks from '../deleteCompletedTasks.js';
import { checkCompletedFunction, createCheckbox, editCompleted } from '../checkCompletedTask.js';
import editTask from '../editTask.js';

const dom = new JSDOM('<!DOCTYPE html><html><body><input id="taskInput"></input><div id="taskList"></div></body></html>');
global.document = dom.window.document;

beforeEach(() => {
  global.localStorage = {
    getItem: jest.fn(() => JSON.stringify(tasks)),
    setItem: jest.fn(),
  };
});

const mockTask = tasks[0];
const mockTaskName = tasks[0].description;
const mockTaskId = tasks[0].id;

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

      checkCompletedFunction(mockTask, 'Enter', mockCheckbox);
      expect(mockTask.completed).toBe(mockCheckbox.checked);

      const changeEvent = new Event('change');
      checkCompletedFunction(mockTask, changeEvent, mockCheckbox);
      expect(mockTask.completed).toBe(mockCheckbox);
    });
  });

  describe('editTask', () => {
    /*
      editTask tests
    */
    it('should save task changes when Enter key is pressed', () => {
      const mockDescriptionElement = document.createElement('label');
      document.createElement = jest.fn(() => mockDescriptionElement);
      editTask(mockTask, 'Enter', mockDescriptionElement);
      expect(mockTask.isEditing).toBe(false);
    });

    it('should trigger editing mode when description element is clicked', () => {
      const mockLabelElement = document.createElement('label');
      document.createElement = jest.fn(() => mockLabelElement);
      mockTask.isEditing = true;
      mockDescriptionElement.value = mockTask.description;

      const clickEvent = new Event('click');
      editTask(mockTask, clickEvent, mockDescriptionElement);
      expect(mockLabelElement.id).toEqual(`description-${mockTaskId}`);
      expect(mockTaskName).toBe(mockDescriptionElement.value);
      // When clik event is triggered on the element, it should enter in mode editing
      expect(mockTask.isEditing).toBe(true);

      editTask(mockTask, 'Enter', mockDescriptionElement);
      expect(mockTask.description).toBe(mockDescriptionElement.value);
      // after pressing Enter, the editing mode should be disabled.
      expect(mockTask.isEditing).toBe(false);
    });

    it('should discard task changes when Escape key is pressed', () => {
      const mockDescriptionElement = document.createElement('input');
      document.createElement = jest.fn(() => mockDescriptionElement);
      const initialDescription = mockTask.description;
      editTask(mockTask, 'Escape', mockDescriptionElement);
      /* const escapeEvent = { key: 'Escape' };
      mockDescriptionElement.dispatchEvent(escapeEvent); */
      expect(mockTask.description).toBe(initialDescription);
      expect(mockTask.isEditing).toBe(false);
    });

    it('should create a label when task is not in editing mode', () => {
      const mockLabelElement = document.createElement('label');
      document.createElement = jest.fn(() => mockLabelElement);
      mockLabelElement.description = mockTask.description;

      editTask(mockTask);
      expect(mockLabelElement.id).toBe(`description-${mockTask.id}`);
      const initialDescription = mockTask.description;
      expect(mockLabelElement.description).toBe(initialDescription);
      expect(mockTask.isEditing).toBe(false);
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
