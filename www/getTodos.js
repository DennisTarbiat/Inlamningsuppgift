/**
 * Fetches the todos from local file
 * @returns {Promise<any[]>}
 */
export async function getTodos() {
  const response = await fetch("../data/todoList.json");
  const data = await response.json();
  return data.todoList;
}
