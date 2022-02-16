import './style.css';
import more from './images/more.png';
import {
  addTask, removeTask, editTaskDescription, updateIndexes,
} from './Add&Delete.js';

const list = document.body.querySelector('.ToDolist');

let tasks = [];
if (tasks !== []) { addTask(tasks); }
const button = document.querySelector('button');
button.addEventListener('click', () => {
  removeTask(tasks); console.log(tasks);
  updateIndexes(tasks);
});

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
    li.innerHTML = `
      <span class="task">
      <input type="checkbox"  name="${taskToAdd.index}" >
      <input type="text" id="${taskToAdd.index}" value="${taskToAdd.description}">
      </span>
    `;
    list.appendChild(li);

    const htmlTask = document.getElementById(`${taskToAdd.index}`);
    htmlTask.addEventListener('keypress', () => {
      editTaskDescription(htmlTask, taskToAdd, tasks);
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
console.log(window.localStorage.getItem('tasks'));
  if (window.localStorage.getItem('tasks') !== null) {
    tasks = JSON.parse(window.localStorage.getItem('tasks'));
    populateHTML(tasks);
  }
});

const inputTask = document.getElementById('addTask');
inputTask.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && inputTask.value !== '') {
    addTask(tasks);
    populateHTML(tasks);
  }
});