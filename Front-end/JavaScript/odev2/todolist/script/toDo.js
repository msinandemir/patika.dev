let getDeleteButtonDOM;

function newElement() {
  let taskText = document.querySelector("#task").value;
  if (!taskText || !taskText.trim().length) {
    $("#emptyTextToast").toast("show");
  } else {
    addToList(taskText);
    document.querySelector("#task").value = "";
  }
}

const addToList = (taskText) => {
  let liDOM = document.createElement("li");
  liDOM.classList.add('li_item')
  liDOM.onclick = checkedToDo;
 let getliDOM = document.querySelectorAll(".li_item");
  getliDOM.forEach((li) =>
  li.addEventListener("click", checkedToDo)
);
  let toDoListDOM = document.querySelector("#list");
  liDOM.innerText = taskText;
  toDoListDOM.appendChild(liDOM);
  let deleteButtonDOM = document.createElement("button");
  deleteButtonDOM.classList.add("delete_btn", "close", "h-100", "p-2");
  deleteButtonDOM.innerHTML = "<span>&times;</span>";
  deleteButtonDOM.onclick = deleteToDo;
  liDOM.appendChild(deleteButtonDOM);
  $("#addedToListToast").toast("show");
  getDeleteButtonDOM = document.querySelectorAll(".delete_btn");
  getDeleteButtonDOM.forEach((btn) =>
    btn.addEventListener("click", deleteToDo)
  );
};

const deleteToDo = (e) => {
  const deleteTodo = e.target.parentElement.parentElement;
  deleteTodo.remove();
};


const checkedToDo = (e) => {
const checkedToDo = e.target.classList.toggle('checked')
}