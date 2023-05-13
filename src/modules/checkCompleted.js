import { saveTasksToLocalStorage } from './storage_functions';
import { todaysList, tasks, task } from '../crud.js'
import { checkCompleted } from "../index.js";

const checkCompletedFunction = () => {
  task.completed = checkCompleted.checked;
  saveTasksToLocalStorage();
};

export default checkCompletedFunction;
