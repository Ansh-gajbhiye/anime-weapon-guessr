// server/server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Backend is up and running!');
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
