/**
 * Created by Adjo Abigail YETE
 * on 3/18/19.
 */

const express = require('express'),
    app = express(),
    bodyParser = require('body-parser');
port = process.env.PORT || 3300; //3000


const mysql = require('mysql');
// connection configurations
const mc = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    port     : '3306',
    password : 'EYGtpv96362',
    database : 'postecash',
    socketPath: '/var/lib/mysql/mysql.sock'
});

// connect to database
mc.connect();

app.listen(port);

console.log('API servenpm,r started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.all('/*', function(request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    response.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
    if (request.method == 'OPTIONS') {
        response.status(200).end();
    } else {
        next();
    }
});

var routes = require('./app/routes/appRoutes'); //importing route
routes(app); //register the route
