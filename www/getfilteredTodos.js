export function getfilteredTodos(todoList, filterBy) {
  const filteredArray = [];

  for (const todo of todoList) {
    if (filterBy === "completed" && todo.completed) {
      filteredArray.push(todo);
    }
    if (filterBy === "uncompleted" && !todo.completed) {
      filteredArray.push(todo);
    }
  }
  return filteredArray;
}
