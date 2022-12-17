"use strict"
import { TODOS_CONST } from "./constants";
import { setToDosInLocalStorage } from "./localStorageAPI";


const inputAdd = document.getElementById("input-add");
const form = document.querySelector("#form");
const todosWrapper = document.getElementById("todos");
const btnAdd = document.querySelector("#btn-add")


let todos = [];
let tempTodos = [];
let allTodos = 0;



const getToDosFromLocalStorage = localStorage.getItem(TODOS_CONST);
const isHasToDos = getToDosFromLocalStorage && !todos.length;

if (isHasToDos) {
  todos = JSON.parse(getToDosFromLocalStorage);
  allTodos = todos.length;
  renderList(todos);
}

// if (inputAdd.value == '') {
//   alert("Поле ввода не должно быть пустым!");
// } else {
//   document.getElementById("list-item").appendChild(li);
// }
// inputAdd.value = '';


btnAdd.addEventListener("click", function () {
  if (inputAdd.value.trim() === "") {
    alert("Поле ввода не должно быть пустым!");
    inputAdd.value = "";
    return;
  }})

form.addEventListener("submit", addTask);

function addTask(e) {
    e.preventDefault();
    const taskText = inputAdd.value;
    console.log(taskText);
    const title = `<li class="list-item">
      <div class="item-todo">
        <input type="checkbox" class="form-check-input" id = "${id}" ${isDone && 'checked="true"'}>
        <label class="form-check-label" for="${id}">${taskText}</label>
        <button data-id=${id} class="bg-img" type="button"></button>
        <span class="input-date" value="">${date}</span>
      </div>
    </li>`
    console.log(title);


    todosWrapper.innerHTML = "";

    const dateTodo = new Date().toLocaleString();
    // function addEl () {
    //     btn_add.addEventListener("click", addListElement);
    // }

    
    // 
    // btn_add.addEventListener("click", function (e) {
    //     e.preventDefault();
    //     console.log(taskHTML);
    //   });
    //  

    todosWrapper.insertAdjacentHTML("beforeend", taskHTML)
    inputAdd.value =""
    inputAdd.focus()
}


const setShowCompleted = () => {
  isShowCompleted = true;
  renderList(tempTodos);
};



const dateTodo = new Date().toLocaleString(); // Mon Dec 05 2022

todos.push({
  title: inputAdd.value,    
  id: randomId(), 
  isDone: false,
  date: dateTodo,
});

inputAdd.value = "";

const createToDoItem = ({title, id, isDone, date }) => {
  return `<li class="list-item">
  <div class="item-todo">
      <input type="checkbox" class="form-check-input" id = "${id}" ${isDone && 'checked="true"'}/>
      <label  class="form-check-label" for="${id}">${title}</label>
      <button class="bg-img" id=${id} type="button"></button>
      <span class="input-date" id = "date" value = "" >${date}</span>
  </li>`
}
// const input = document.querySelector("#date") 
//  let input_date = new Date();
// const date = document.querySelector("#input-date");  //  как выставить в календаре дату автоматически?
// Date.now = function now() {
//     return new Date().getTime();
//   };
//   now();




// let date = document.querySelector("#input-date");
// date = new Date();
// date( now ); 





// <input class="input-date" id = "date" value="${date}">${date}</div>