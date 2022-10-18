//Imports functions used in this script
import { getTodos } from "./getTodos.js";
import { getFilteredTodos } from "./getFilteredTodos.js";
import { appendLists } from "./appendLists.js";

//Calls functions used in this script
const todoList = await getTodos();
const completedTodos = getFilteredTodos(todoList, "completed");
const uncompletedTodos = getFilteredTodos(todoList, "uncompleted");

appendLists(completedTodos, uncompletedTodos);
