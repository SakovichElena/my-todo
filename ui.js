export const createToDoItem = ({ title, id, isDone, date }) => {
    return `<li class="list-item">
    <div class="item-todo">
      <input type="checkbox" class="form-check-input" id = "${id}" ${isDone && 'checked="true"'}>
      <label class="form-check-label" for="${id}">${title}</label>
      <button data-id=${id} class="bg-img" type="button"></button>
      <span class="input-date" value="">${date}</span>
    </div>
  </li>`
  };