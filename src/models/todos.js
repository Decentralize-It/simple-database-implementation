// Imports functions from ./db/todos.js
const { getAllTodos, addTodo, getTodoById, getCompletedTodos, getUncompletedTodos } = require('./db/todos')

module.exports = { getAllTodos, addTodo, getTodoById, getCompletedTodos, getUncompletedTodos }