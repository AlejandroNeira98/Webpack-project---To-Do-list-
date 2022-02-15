import _ from 'lodash';
import './style.css';

function component() {
  const element = document.createElement('div');

// Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());

const list = document.body.getElementsByClassName('ToDolist');
const tasks = [];

for (let i = 0 ; i < tasks.length ; i++) {
  let li = document.createElement('div')
  li.classList.add('li');
  let taskToAdd = {};
  tasks.forEach( task => {
    if(task.index === i){
      taskToAdd = task;
      break;
    }
  } )
  li.innerHTML = `
    <input type="checkbox" id="${taskToAdd.index}" name="${taskToAdd.index}" checked="${taskToAdd.completed}" >
    <label for="${taskToAdd.index}"> ${taskToAdd.description}</label>
  `
  list.appendChild(li)
}


