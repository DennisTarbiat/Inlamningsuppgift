//Imports functions used in this script
import { getTodos } from "./getTodos.js";
import { getfilteredTodos } from "./getfilteredTodos.js";
import { appendLists } from "./appendLists.js";

//Calls functions used in this script
const todoList = await getTodos();
const completedTodos = getfilteredTodos(todoList, "completed");
const uncompletedTodos = getfilteredTodos(todoList, "uncompleted");

appendLists(completedTodos, uncompletedTodos);
