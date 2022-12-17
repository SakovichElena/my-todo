"use strict";
const inputAdd = document.getElementById("input-add");
const form = document.querySelector("#form");
// const input_add = document.querySelector("#input_add");
const list_group = document.querySelector("#list_group");
const btn_add = document.querySelector("#add");
let todos = [];
form.addEventListener("submit", addTask);
function addTask(e) {
    e.preventDefault();
    const taskText = inputAdd.value;
    console.log(taskText);
    const taskHTML = `<li class="list-item">
    <div class="item-todo">
    <input type="checkbox" class="form-check-input">
    <label  class="form-check-label" for="">${taskText}</label>
    <button class="bg-img" type="button"></button>
    <span class="input-date" value=""></span>
</div>
    </li>`;
    console.log(taskHTML);
    // function addEl () {
    //     btn_add.addEventListener("click", addListElement);
    // }
    // 
    // btn_add.addEventListener("click", function (e) {
    //     e.preventDefault();
    //     console.log(taskHTML);
    //   });
    //  
    list_group.insertAdjacentHTML("beforeend", taskHTML);
    inputAdd.value = "";
    inputAdd.focus();
}
const dateTodo = new Date().toLocaleString(); // Mon Dec 05 2022
todos.push({
    title: inputAdd.value,
    // id: randomId(), // генерирует уникальные id и избавляет от бага при удалении todo !! можете вернуть строчку todos.length + 1 и посмотреть как будут вести себя todo при удалении
    isDone: false,
    date: dateTodo
});
inputAdd.value = "";
const createToDoItem = ({ title , id , isDone , date  })=>{
    return `<li class="list-item">
  <div class="item-todo">
      <input type="checkbox" class="form-check-input" id = "${id}" ${isDone && 'checked="true"'}/>
      <label  class="form-check-label" for="${id}">${title}</label>
      <button class="bg-img" id=${id} type="button"></button>
      <span class="input-date" id = "date" value = "" >${date}</span>
  </li>`;
} // const input = document.querySelector("#date") 
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
;

//# sourceMappingURL=index.c36f364e.js.map
