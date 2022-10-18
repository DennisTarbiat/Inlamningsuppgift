/**
 * Takes a list and filters it according to the filterBy parameter
 * Custom alternative to array.filter()
 * @param {array} todoList Array of todos
 * @param {string} filterBy What to filter by
 * @returns {array} Filtered array
 */
export function getFilteredTodos(todoList, filterBy) {
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
