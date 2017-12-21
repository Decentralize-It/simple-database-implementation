const conn = require('./conn')

const getAllTodos = () => conn.query(`SELECT * FROM todos`)
const addTodo = (text) => conn.query(`INSERT INTO todos (text) VALUES (text)`, text)
const getTodoById = (id) => conn.query(`SELECT * FROM todos WHERE id=id`, id)
const getCompletedTodos = () => conn.query(`SELECT * FROM todos WHERE completed=true`)
const getUncompletedTodos = () => conn.query(`SELECT * FROM todos WHERE completed=false`)

module.exports = { getAllTodos, addTodo, getTodoById, getCompletedTodos, getUncompletedTodos }
