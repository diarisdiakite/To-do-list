export function saveTasksToLocalStorage(tasks) {
  localStorage.setItem('To-Do today', JSON.stringify(tasks));
}

export function getTasksFromLocalStorage() {
  const storedTask = localStorage.getItem('To-Do today');
  if (storedTask) {
    return JSON.parse(storedTask);
  }
  return [];
}
