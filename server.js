const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  
  // set header content type
  res.setHeader('Content-Type', 'text/html');
  
  
  //add OWN path
  let path = './todoapp';
  switch(req.url) {
    case '/':
        path += 'index.html';
        res.statusCode = 200;
        break;
    case 'trash':
        path += 'trash.html';
        res.statusCode = 200;
        break;
    default:
        path += '404.html';
        res.statusCode = 404;
        break;
  }

  //send an html file
  fs.readFile(path, (err, data) => {
    if (err) {
        console.log(err);
        res.end();
    } else {
        res.write(data);
        res.end();
    }
  })

})