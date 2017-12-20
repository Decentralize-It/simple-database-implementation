const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser')
const urlParser = bodyParser.urlencoded({extended: false})
app.set("view engine", "ejs");

app.get('/', (req, res) => {
  res.render('index')
});

app.get('/signup', (req, res) => {
  res.render('signup')
});

app.post('/signup', (req, res) => {

})

app.get('/login', (req, res) => {
  res.render('login')
});


app.listen(PORT, () => console.log(`APPLICATION LIVE on localhost:${PORT}`));
