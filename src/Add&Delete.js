export function updateLocalStorageFromHTML(tasks) {
  const newTasks = [];
  let i = 1;
  document.querySelectorAll('.task').forEach((HTMLtask) => {
    const object = {};
    object.index = i;
    object.description = HTMLtask.querySelector('[type="text"]').value;
    object.completed = HTMLtask.querySelector('[type="checkbox"]').checked;
    newTasks.push(object);
    i += 1;
  });
  tasks = newTasks;
  window.localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function updateIndexes(tasks) {
  tasks.forEach((task) => {
    task.index = tasks.indexOf(task) + 1;
  });
  window.localStorage.setItem('tasks', JSON.stringify(tasks));
  /*  const tasksOrdered = [];

  for (let i = 1; i <= tasks.length; i += 1) {
    let position = 0;
    let min = tasks[0];

    for (let n = 0; n < tasks.length; n += 1) {
      if (tasks[n].index < min.index) {
        min = tasks[n];
        position = n;
      }
    }
    min.index = i;
    tasksOrdered.push(min);
    tasks.splice(position, 1);
  }
  tasks = tasksOrdered;
  if (tasksOrdered !== []) {
    window.localStorage.setItem('tasks', JSON.stringify(tasks));
  } */
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

export function removeTask(tasks) {
  updateLocalStorageFromHTML(tasks);
}

export function editTaskDescription(htmlTask, taskObj, tasks) {
  taskObj.description = htmlTask.value;
  window.localStorage.setItem('tasks', JSON.stringify(tasks));
}