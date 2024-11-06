require('dotenv').config();
const express = require('express');
const path = require('node:path')

const app = express();
app.use('views', path.join(__dirname, 'views'));
app.use('view engine', 'ejs');


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}.`);
});