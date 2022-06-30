const express = require('express');
const app = express();
//register view engine
app.set('view engine', 'ejs'); 

app.listen(3000);

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