import './style.css';
import more from './images/more.png';
import {
  addTask, removeTask, editTaskDescription, updateIndexes,
} from './Add&Delete.js';
import {
  ChangeCheck, removeTasks,
} from './ClearChecked.js';

const list = document.body.querySelector('.ToDolist');
let tasks = [];

function updateTasksArray() {
  tasks = JSON.parse(window.localStorage.getItem('tasks'));
}

function populateHTML(tasks) {
  const lis = document.querySelectorAll('.li');
  lis.forEach((li) => li.remove());

  for (let i = 1; i <= tasks.length; i += 1) {
    const li = document.createElement('div');
    li.classList.add('li');
    let taskToAdd = {};
    tasks.forEach((task) => {
      if (task.index === i) {
        taskToAdd = task;
      }
    });
    if (taskToAdd.completed === true) {
      li.innerHTML = `
      <span class="task">
      <input type="checkbox"  name="${taskToAdd.index}" checked >
      <input type="text" id="${taskToAdd.index}" value="${taskToAdd.description}">
      <button type="button" id="${taskToAdd.index}button"> remove </button>
      </span>
    `;
    } else {
      li.innerHTML = `
      <span class="task">
      <input type="checkbox"  name="${taskToAdd.index}" >
      <input type="text" id="${taskToAdd.index}" value="${taskToAdd.description}">
      <button type="button" id="${taskToAdd.index}button"> remove </button>
      </span>
    `;
    }
    list.appendChild(li);

    const removebtn = document.getElementById(`${taskToAdd.index}button`);
    removebtn.addEventListener('click', () => { li.remove(); removeTask(tasks); updateTasksArray(); });

    const htmlTask = document.getElementById(`${taskToAdd.index}`);
    htmlTask.addEventListener('keypress', () => {
      editTaskDescription(htmlTask, taskToAdd, tasks);
    });

    const checkbox = document.querySelector(`[name="${taskToAdd.index}"]`);
    checkbox.addEventListener('click', () => {
      updateTasksArray();
      ChangeCheck(taskToAdd);
      window.localStorage.setItem('tasks', JSON.stringify(tasks));
    });
  }

  const htmlTasks = document.getElementsByClassName('li');

  for (let i = 0; i < htmlTasks.length; i += 1) {
    const icon = document.createElement('i');
    const image = new Image();
    image.src = more;
    icon.appendChild(image);
    htmlTasks[i].appendChild(icon);
  }
}

window.addEventListener('load', () => {
  if (window.localStorage.getItem('tasks') !== null && JSON.parse(window.localStorage.getItem('tasks')) !== []) {
    updateIndexes(JSON.parse(window.localStorage.getItem('tasks')));
    tasks = JSON.parse(window.localStorage.getItem('tasks'));
    populateHTML(JSON.parse(window.localStorage.getItem('tasks')));
  }
});

const button = document.querySelector('#clear');
button.addEventListener('click', (e) => {
  e.preventDefault();
  removeTasks(JSON.parse(window.localStorage.getItem('tasks')));
  populateHTML(JSON.parse(window.localStorage.getItem('tasks')));
});

const inputTask = document.getElementById('addTask');
inputTask.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && inputTask.value !== '') {
    addTask(tasks);
    populateHTML(tasks);
  }
});