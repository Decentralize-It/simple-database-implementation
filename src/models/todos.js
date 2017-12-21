// Imports functions from ./db/todos.js
const { getAllTodos, addTodo, getTodoById, getCompletedTodos, getUncompletedTodos, updateTodo, deleteTodo } = require('./db/todos')

module.exports = { getAllTodos, addTodo, getTodoById, getCompletedTodos, getUncompletedTodos, updateTodo, deleteTodo }