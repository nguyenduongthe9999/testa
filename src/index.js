const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars').engine;
const morgan = require('morgan');
const exp = require('constants');
const app = express();
const port = process.env.PORT || 5000;
const route = require('./routes');
const db = require('./config/db');

// connect to db
db.connect()

app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('combined'));

app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources', 'views'));
app.use(express.urlencoded());
app.use(express.json());
// console.log(path.join(__dirname,'resources', 'views'))


app.get('/middwere',
    function (req,res,next) {
        if (true) {
            return next();

        } else {
            res.status(403).json({
                message:'access fail'
            })

        }
}, function(req,res,next) {
    res.send('ok ok')
})

route(app);

app.listen(port, () => console.log(port));
