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
const { getAllTodos, addTodo, getTodoById, getCompletedTodos, getUncompletedTodos } = require('./src/models/todos')

app.set("view engine", "ejs");
app.use(urlParser);

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/addtodo', (req, res) => {
  res.render('addtodo');
});

app.post('/addtodo', (req, res) => {
  let {name, description} = req.body

  res.render('addtodo');
});

app.get('/:todo_id', (req, res) => {
  res.render('todo');
});

app.delete('/:todo_id', (req, res) => {
  let todoId = req.params.todo_id
  
  res.render('todo');
});

app.post('/login', urlParser, (req, res) => {
  let { name, email } = req.body

  res.render('login')
});


app.listen(PORT, () => console.log(`APPLICATION LIVE on localhost:${PORT}`));
