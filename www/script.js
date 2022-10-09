function getTodos() {
  fetch("../Data/todo.json")
    .then((respone) => (respone = respone.json()))
    .then((data) => {
      console.log(data.todoList);
    });
}

getTodos();
