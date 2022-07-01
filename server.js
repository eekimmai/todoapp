const express = require('express');
const mongoose = require('mongoose');
const app = express();
const todoitems = require('./models/todolist');
//connect to mongodb
const dbURI = 'mongodb+srv://newuser:test1234@cluster0.3l0fxpt.mongodb.net/todoapplist?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(3000))
  .catch(err => console.log(err));

//register view engine
app.set('view engine', 'ejs'); 

//middleware for static files
app.use(express.static('public'));

//routes

app.get('/', (req, res) => {
  res.render('index');
})
//push new item to mongo db upon get request
/*
app.get('/trash', (req, res) => {
  const item = new todoitems({
  //find a way to use this line to get items from todo list once delete button is clicked
  text: 'new item2',
  }); 

  item.save()
    .then((result) => {
      //res.send(result)
    })
    .catch((err) => {
      console.log(err);
    });
})
*/

app.get('/index.html', (req, res) => {
  res.render('index');
});

app.get('/trash.html', (req, res) => {
  res.render('trash');
});
//404 page if request not found
app.use((req, res) =>{
  res.status(404).render('404')
})