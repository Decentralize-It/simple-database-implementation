// imports the express module
const express = require('express');
// instantiates the express module
const app = express();
const PORT = process.env.PORT || 3000;
// imports the body-parser module
const bodyParser = require('body-parser')
// parses url string
const urlParser = bodyParser.urlencoded({extended: false})

// Imports database functions from src/models/todos.js
const {getAllTodos, getCompletedTodos} = require('./src/models/todos')

app.set("view engine", "ejs");
app.set("views", "src/views")
app.use(urlParser);


app.get('/', (req, res) => {
  getAllTodos()
    .then( tasks => {
    res.render('index', {tasks})
  })
})

app.get('/completed', (req, res) => {
  getCompletedTodos()
    .then( tasks => {
    res.render('index', {tasks})
  })
})

app.get('/addtodo', (req, res) => {
  res.render('addtodo');
});

// app.post('/addtodo', (req, res) => {
//   let {name, description} = req.body
//   addTodo(name, description)
//   let tasks = getAllTodos()
//   res.render('index', {tasks});
// });

// app.get('/:todo_id', (req, res) => {
//   let todoId = req.params.todo_id
//   let task = getTodoById(todoId)
//   res.render('todo', {task});
// });

// app.delete('/:todo_id', (req, res) => {
//   let todoId = req.params.todo_id
//   deleteTodo(todoId)
//   let tasks = getAllTodos()
//   res.render('index', {tasks});
// });


app.listen(PORT, () => console.log(`APPLICATION LIVE on localhost:${PORT}`));
