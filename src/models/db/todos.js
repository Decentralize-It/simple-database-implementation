const conn = require('./conn')

const getAllTodos = () => conn.query(`SELECT * FROM todos`)
const addTodo = (text, description) => conn.query(`INSERT INTO todos (text, description) VALUES ($1, $2) RETURNING *`, [text, description])
const getTodoById = (id) => conn.query(`SELECT * FROM todos WHERE id=$1`, id)
const getCompletedTodos = () => conn.query(`SELECT * FROM todos WHERE completed=true`)
const getUncompletedTodos = () => conn.query(`SELECT * FROM todos WHERE completed=false`)

module.exports = { getAllTodos, addTodo, getTodoById, getCompletedTodos, getUncompletedTodos }
