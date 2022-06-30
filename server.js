const express = require('express');
const mongoose = require('mongoose');
const app = express();
//connect to mongodb
const dbURI = 'mongodb+srv://newuser:test1234@cluster0.3l0fxpt.mongodb.net/todoapplist?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(3000))
  .catch(err => console.log(err));

//register view engine
app.set('view engine', 'ejs'); 

//middleware for static files
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

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