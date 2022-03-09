const express = require('express');
const res = require('express/lib/response');
const app = express();

app.get('/', (req, res) => {
  res.send({ click_for_wisdom: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' });
});

const PORT = process.env.PORT || 5000
app.listen(PORT);