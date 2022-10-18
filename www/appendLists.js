/**
 * Function that creates and append html elements based on the arrays recived
 * @param {any[]} completedTodos
 * @param {any[]} uncompletedTodos
 */

export function appendLists(completedTodos, uncompletedTodos) {

  //Creates and appends a "h1" element with description of the users options
  const pageDescription = document.createElement("h1");
  pageDescription.textContent =
    "Klicka på vilken uppgift i listan du vill flytta på!";
  document.body.appendChild(pageDescription);

  //Creates and appends a "div" element for completed list
  const completedDiv = document.createElement("div");
  document.body.appendChild(completedDiv);

  //Creates and appends a "ul" element for the completed list and sets it "id" to "completed"
  //Also creates and appends a title for the "ul" element
  const completedUl = document.createElement("ul");
  const completedTitle = document.createElement("h2");
  completedTitle.textContent = "Klara Uppgifter";
  completedUl.id = "completed";
  completedDiv.appendChild(completedTitle);
  completedDiv.appendChild(completedUl);

  //Creates and appends a "div" element for uncompleted list
  const uncompletedDiv = document.createElement("div");
  document.body.appendChild(uncompletedDiv);
  
  //Creates and append a "ul" element for the uncompleted list and sets it "id" to "uncompleted"
  //Also creates and appends a title for the "ul" element
  const uncompletedUl = document.createElement("ul");
  const uncomplitedTitle = document.createElement("h2");
  uncomplitedTitle.textContent = "Oklara Upggifter";
  uncompletedUl.id = "uncompleted";
  uncompletedDiv.appendChild(uncomplitedTitle);
  uncompletedDiv.appendChild(uncompletedUl);

  //Creates and appends a "li" element for each element in the "completedTodos" array
  for (const todo of completedTodos) {
    const li = document.createElement("li");
    li.textContent = todo.title;
    //Changes list when clicking on the "li" element
    li.addEventListener("click", toggleList);
    completedUl.appendChild(li);
  }

  //Creates and appends a "li" element for each element in the "uncompletedTodos" array
  for (const todo of uncompletedTodos) {
    const li = document.createElement("li");
    li.textContent = todo.title;
    //Changes list when clicking on the "li" element
    li.addEventListener("click", toggleList);
    uncompletedUl.appendChild(li);
  }
}

/**
 * Appends the "li" element to uncompleted or completed "ul" element depending on the "parentNode id"
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
