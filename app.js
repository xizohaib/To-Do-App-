let task_Entered = document.querySelector("#task-name");
let task_date = document.querySelector("#task-date");
let tasks_list = document.querySelector(".task-list");
let add_btn = document.querySelector("#add-btn");


add_btn.addEventListener("click", () => {
  let task_name = task_Entered.value;

  if (task_name === "" || task_date.value === "")
  {
    return 0 ;
  }

  let div = document.createElement("div");
  div.classList.add("task-item");

  let span = document.createElement("span");
  span.innerText = `${task_name} (${task_date.value})`;
  div.append(span);

  let deletebtn = document.createElement("button");
  deletebtn.innerText = "Delete";
  deletebtn.classList.add("delete-btn");
  div.append(deletebtn);

  tasks_list.append(div);
  task_Entered.value = ""
  task_date.value=""
});

// DELETE task using EVENT DELEGATION
tasks_list.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-btn")) {
    event.target.parentElement.remove();
  }
});



