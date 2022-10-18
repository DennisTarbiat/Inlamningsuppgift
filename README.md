# Solving the problem
This code fetches a "todoList" and creates two lists, one with completed todos anad one with uncompleted todos, based on the key/value pair "completed": "true/false" of the todo.
Further the two lists are presented on the html page.

# Step by step guide

## Step 1
Import "appendList","getFilteredTodos" and "getTodos" functions to the script.js file.
## Step 2
Call the function "getTods" to fetch the "todoList.json" and store it in a variable. The directory can be changed in the function to fetch another todoList stored in a different folder or server as long as the todos in that list consist of the key/value pair "completed": "true/false". 
## Step 3
Call the function "getfilteredTodos" twice with the first parameter being the "todoList" that has been stored in a variable. The second parameters being the string "completed" or "uncompleted" depending on what the filtered list should consist of. Then store the filtered lists in two different variables.
## Step 4
Call the function "appendList", with the variables that was stored from the previous step as the parameters.

# Quick Start
Open the html file in a browser.

# Reusing the solution
This solution can not only be used on any todo list, it can be used more or less in any type of lists that contains the key/value pair "completed": "true/false".
For example a list that keeps track of who has paid the monthly fee of a gym membership can also use this code as a solution.

# Simple changes
Each function is created in separated files, not only to keep the code organized but also make it easier to reuse. The only thing someone needs to do is change the names of the variables and functions to match what type of list they are using before reusing the code.