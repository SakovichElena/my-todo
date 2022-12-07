"use strict";
// const todo = {
//     action(e) {},
//     add() {},
//     create(text) {},
//     init() {},
//     update() {},
//     save() {}
// };
const form = document.querySelector("#form");
const input_add = document.querySelector("#input_add");
const list_group = document.querySelector("#list_group");
const btn_add = document.querySelector("#add");
form.addEventListener("submit", addTask);
function addTask(e) {
    e.preventDefault();
    const taskText = input_add.value;
    console.log(taskText);
    const taskHTML = `<li class="list-group-item">
    <div class="item-todo">
        <input type="checkbox" class="form-check-input">
        <label  class="form-check-label" for="">${taskText}</label>
        <img src="./img/trash-svgrepo-com.svg" alt="trash">
        <input type="date" class="input-date" value="2022-12-07">
    </div>
    </li>`;
    // console.log(taskHTML);
    // function addEl () {
    //     btn_add.addEventListener("click", addListElement);
    // }
    // 
    btn_add.addEventListener("click", function(e) {
        e.preventDefault();
        console.log(taskHTML);
    });
    //  
    list_group.insertAdjacentHTML("beforeend", taskHTML);
    input_add.value = "";
    input_add.focus();
}

//# sourceMappingURL=index.c36f364e.js.map
