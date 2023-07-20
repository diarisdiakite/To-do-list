describe('deleteCompletedTasks', () => {
  it('should delete all completed tasks from the task list', () => {
    deleteCompletedTasks(tasks);

    const updatedTasks = tasks.filter((task) => !task.completed);
    expect(localStorage.setItem).toHaveBeenCalled();
    expect(localStorage.setItem).toHaveBeenCalledWith('tasks', JSON.stringify(updatedTasks));
  });
});