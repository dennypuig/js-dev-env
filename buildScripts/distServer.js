import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function (req, res) {
  //Hard code for simplicity. Pretend this hit a real database
  res.json([
    { "id": 1, "firstName": "Bob", "lastName": "Smith", "email": "bob.smith@gmail.com" },
    { "id": 2, "firstName": "Daniel", "lastName": "Alejandro", "email": "deniel.alejandro@gmail.com" },
    { "id": 3, "firstName": "Ana", "lastName": "Falcon", "email": "ana.falcon@gmail.com" }
  ]);
});

app.listen(port, function (err) {
  if (err) {
    console.log(err); //eslint-disable-line no-console
  } else {
    open('http://localhost:' + port);
  }
});
