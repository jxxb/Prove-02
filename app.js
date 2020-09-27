const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const cRoutes = require('./routes/club');

app.set('views', path.join(__dirname, 'views'))
   .set('view engine', 'ejs')
   .use(bodyParser.urlencoded({extended: false}))
   .use(express.static(path.join(__dirname, "public")))
   .use(cRoutes);

app.listen(4000);