//const listItem = e.target.closest('.list-element'); 

/* export const deleteTaskFromDOM = (tasks, task, listItem) => {
    const taskIndex = tasks.findIndex((t) => t.id === task.id);
    if (taskIndex > -1) {
      const updatedTasks = [...tasks];
      updatedTasks.splice(taskIndex, 1);
      listItem.remove(); // Remove the associated DOM element
      return updatedTasks;
    }
    return tasks;
  }; */

  export const deleteTaskFromDOM = (parentElement, task) => {
    const listItem = parentElement.querySelector(`[data-task-id="${task.id}"]`);
    if (listItem) {
      parentElement.removeChild(listItem);
    }
  };
