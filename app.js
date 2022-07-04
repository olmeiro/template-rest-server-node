require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send('hello world')
});

app.listen( process.env.PORT, () => {
  console.log(`listening on PORT ${ process.env.PORT}`)
});
