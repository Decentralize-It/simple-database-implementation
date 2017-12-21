const conn = require('./conn')

const getAllTodos = () => conn.any(`SELECT * FROM tasks`)
const addTodo = (text, description) => conn.one(`INSERT INTO tasks (text, description) VALUES ($1:text, $2:description) RETURNING *`, [text, description])
const updateTodo = (id, name, description, isComplete) => conn.none(`UPDATE tasks SET name=$2:name, description=$3:description, is_complete=$4:isComplete WHERE id=$1:id`, [id, name, description, isComplete])
const deleteTodo = (id) => conn.none(`DELETE tasks WHERE id=$1:id`, id)
const getTodoById = (id) => conn.one(`SELECT * FROM tasks WHERE id=$1:id`, id)
const getCompletedTodos = () => conn.any(`SELECT * FROM tasks WHERE is_complete=true`)
const getUncompletedTodos = () => conn.any(`SELECT * FROM tasks WHERE completed=false`)

module.exports = { getAllTodos, addTodo, getTodoById, getCompletedTodos, getUncompletedTodos, updateTodo, deleteTodo }
