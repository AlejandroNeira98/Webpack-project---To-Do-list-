import './style.css';
import more from './images/more.png';

const list = document.body.querySelector('.ToDolist');

const tasks = [
  {
    index: 1,
    description: 'some task',
    completed: 'true',
  }, {
    index: 2,
    description: 'some task 2',
    completed: 'false',
  }, {
    index: 3,
    description: 'some task 3',
    completed: 'false',
  }, {
    index: 4,
    description: 'some task 4',
    completed: 'false',
  },
];

function pupulateHTML() {
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
      <span>
      <input type="checkbox" id="${taskToAdd.index}" name="${taskToAdd.index}" checked="${taskToAdd.completed}" >
      <label for="${taskToAdd.index}"> ${taskToAdd.description}</label>
      </span>
    `;
    list.appendChild(li);
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

window.addEventListener('load', pupulateHTML());
