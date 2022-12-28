const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));

const port = 2868;
app.listen(2868, () => {
  console.log(`Server listening on port ${port}`);
});