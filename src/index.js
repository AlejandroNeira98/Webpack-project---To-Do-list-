import _ from 'lodash';
import './style.css';

function component() {
  const element = document.createElement('div');

// Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());

const list = document.body.querySelector('.ToDolist');

const tasks = [
  {
    index: 2,
    description: "some task",
    completed: true
  },{
    index: 1,
    description: "some task 2",
    completed: false
  }
];

for (let i = 1 ; i <= tasks.length ; i++ ) {
  let li = document.createElement('div')
  li.classList.add('li');
  let taskToAdd = {};
  tasks.forEach( task => {
    if(task.index === i){
      taskToAdd = task;
    }
  } )
  li.innerHTML = `
    <input type="checkbox" id="${taskToAdd.index}" name="${taskToAdd.index}" checked="${taskToAdd.completed}" >
    <label for="${taskToAdd.index}"> ${taskToAdd.description}</label>
    <i></i>
  `
  list.appendChild(li);
}


