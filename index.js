const express = require('express');
const app = express();
const port = 3000;
const connection = require("./db");

app.get('/api/movies', (request, response) => {
  connection.query('SELECT * FROM movie', (error, result) => {
    if (error) {
      throw error;
    }

    response.send(result);
  });
});

app.get('/api/movies/names', (request, response) => {
    connection.query('SELECT name FROM movie', (error, result) => {
      if (error) {
        throw error;
      }
      response.send(result);
    });
  });

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  console.log(`Server is listening on ${port}`);
});