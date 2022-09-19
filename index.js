const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars').engine;
const morgan = require('morgan');
const exp = require('constants');
const app = express();
const port = process.env.PORT || 5000;
const route = require('./src/routes');
const db = require('./src/config/db');
const dotenv = require('dotenv')
dotenv.config()

// connect to db
db.connect()
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources', 'views'));
app.use(express.urlencoded());
app.use(express.json());
route(app);

app.listen(port, () => console.log(port));
