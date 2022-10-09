export function appendLists(completedTodos, uncompletedTodos) {
  const completedDiv = document.createElement("div");
  document.body.appendChild(completedDiv);

  const completedUl = document.createElement("ul");
  const completedTitle = document.createElement("h2");
  completedTitle.textContent = "Klart";
  completedUl.id = "completed";
  completedDiv.appendChild(completedTitle);
  completedDiv.appendChild(completedUl);

  const uncompletedDiv = document.createElement("div");
  document.body.appendChild(uncompletedDiv);

  const uncompletedUl = document.createElement("ul");
  const uncomplitedTitle = document.createElement("h2");
  uncomplitedTitle.textContent = "Oklart";
  uncompletedUl.id = "uncompleted";
  uncompletedDiv.appendChild(uncomplitedTitle);
  uncompletedDiv.appendChild(uncompletedUl);

  for (const todo of completedTodos) {
    const li = document.createElement("li");
    li.textContent = todo.title;
    li.addEventListener("click", toggleList);
    completedUl.appendChild(li);
  }

  for (const todo of uncompletedTodos) {
    const li = document.createElement("li");
    li.textContent = todo.title;
    li.addEventListener("click", toggleList);
    uncompletedUl.appendChild(li);
  }
}

function toggleList() {
  const uncompletedUl = document.querySelector("#uncompleted");
  const completedUl = document.querySelector("#completed");
  if (this.parentNode.id === "completed") {
    uncompletedUl.appendChild(this);
    return;
  }
  if (this.parentNode.id === "uncompleted") {
    completedUl.appendChild(this);
  }
}
