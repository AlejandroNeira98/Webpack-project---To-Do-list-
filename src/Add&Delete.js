export function updateIndexes(tasks) {
  const tasksOrdered = [];
  for (let i = 1; i <= tasks.length; i += 1) {
    let min = tasks[0];
    for (let n = 0; n < tasks.length; n += 1) {
      if (min.index >= tasks[n].index) {
        min = tasks[n];
      }
    }
    min.index = i;
    tasksOrdered.push(min);
    tasks.splice(tasks.indexOf(min), 1);
  }
  tasks = tasksOrdered;
  if (tasksOrdered !== []) {
    window.localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}

export function addTask(tasks) {
  const inputTask = document.getElementById('addTask');
  if (inputTask.value !== '') {
    const inputTaskObj = {
      index: tasks.length + 1,
      description: inputTask.value,
      completed: false,
    };
    tasks.push(inputTaskObj);
    if (tasks[0].description !== '') { window.localStorage.setItem('tasks', JSON.stringify(tasks)); }
  }

  inputTask.value = null;
}

export function removeTasks(tasks) {
  function completed(object) { return object.completed === false; }
  tasks = tasks.filter(completed);
  /* update indexes */
  updateIndexes(tasks);
}

export function removeTask(tasks) {
  function completed(object) { return object.completed === false; }
  tasks.filter(completed);
}

export function editTaskDescription(htmlTask, taskObj, tasks) {
  taskObj.description = htmlTask.value;
  window.localStorage.setItem('tasks', JSON.stringify(tasks));
}