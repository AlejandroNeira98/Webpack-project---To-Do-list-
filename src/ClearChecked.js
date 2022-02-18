import { updateIndexes } from './Add&Delete.js';

export function removeTasks(tasks) {
  function completed(task) { return task.completed === false; }
  tasks = tasks.filter(completed);
  updateIndexes(tasks);
  window.localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function ChangeCheck(task) {
  if (task.completed) {
    task.completed = false;
  } else {
    task.completed = true;
  }
}