/**
 * Function that creates and append html elements based on the arrays recived
 * @param {any[]} completedTodos
 * @param {any[]} uncompletedTodos
 */
export function appendLists(completedTodos, uncompletedTodos) {
  //Creates and appends a "h1" with description of the users options
  const pageDescription = document.createElement("h1");
  pageDescription.textContent =
    "Klicka på vilken uppgift i listan du vill flytta på!";
  document.body.appendChild(pageDescription);

  //Creates and append "div" for completed list
  const completedDiv = document.createElement("div");
  document.body.appendChild(completedDiv);
  //Creates and appends a "ul" for the completed list and sets it "id" to "completed"
  //Also creates and appends a title for the "ul"
  const completedUl = document.createElement("ul");
  const completedTitle = document.createElement("h2");
  completedTitle.textContent = "Klara Uppgifter";
  completedUl.id = "completed";
  completedDiv.appendChild(completedTitle);
  completedDiv.appendChild(completedUl);

  //Creates and append "div" for uncompleted list
  const uncompletedDiv = document.createElement("div");
  document.body.appendChild(uncompletedDiv);
  //Creates and append a "ul" for the uncompleted list and sets it "id" to "uncompleted"
  //Also creates and appends a title for the "ul"
  const uncompletedUl = document.createElement("ul");
  const uncomplitedTitle = document.createElement("h2");
  uncomplitedTitle.textContent = "Oklara Upggifter";
  uncompletedUl.id = "uncompleted";
  uncompletedDiv.appendChild(uncomplitedTitle);
  uncompletedDiv.appendChild(uncompletedUl);

  //Creates and append a "li" for each element in "completedTodos" array
  for (const todo of completedTodos) {
    const li = document.createElement("li");
    li.textContent = todo.title;
    //Changes the "ul" when clicking on the "li"
    li.addEventListener("click", toggleList);
    completedUl.appendChild(li);
  }

  //Creates and append a "li" for each element in "uncompletedTodos" array
  for (const todo of uncompletedTodos) {
    const li = document.createElement("li");
    li.textContent = todo.title;
    //Changes the "ul" when clicking on the "li"
    li.addEventListener("click", toggleList);
    uncompletedUl.appendChild(li);
  }
}

/**
 * Appends the "li" to uncompleted or completed "ul" depending on "parentNode id"
 * @returns {void}
 */
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
