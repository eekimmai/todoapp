const express = require('express');
const app = express();
//register view engine
app.set('view engine', 'ejs'); 

app.listen(3000);

app.get('/', (req, res) => {
  res.sendFile('/index.html', { root: __dirname});
});

app.get('/index.html', (req, res) => {
  res.sendFile('/index.html', { root: __dirname});
});

app.get('/trash.html', (req, res) => {
  res.sendFile('/trash.html', { root: __dirname});
});
//404 page if request not found
app.use((req, res) =>{
  res.status(404).sendFile('/404.html', {root: __dirname})
})