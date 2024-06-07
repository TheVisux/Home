const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json());

app.post('/save', (req, res) => {
  const data = req.body;
  fs.appendFile('data.txt', JSON.stringify(data) + '\n', (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error saving data');
    } else {
      res.send('Data saved successfully');
    }
  });
});

app.listen(5050, () => {
  console.log('Server listening on port 5050');
});