/**
 * Created by Adjo Abigail YETE
 * on 3/18/19.
 */

let express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
port = process.env.PORT || 3300; //3000


let mysql = require('mysql');
// connection configurations
/*let mc = mysql.createConnection({
    host     : 'nesz.myd.sharedbox.com',
    user     : 'nesz_postecash',
    port     : '3306',
    password : 'BzhKYlKxvcxp',
    database : 'nesz_postecash'
    //socketPath: '/tmp/mysql.sock'
});*/
let mc = mysql.createConnection({
    host     : '185.74.71.245',
    user     : 'root',
    port     : '3306',
    password : 'EYGtpv96362',
    database : 'nesz_postecash'
    //socketPath: '/tmp/mysql.sock'
});
mc.connect();
handleDisconnect(mc);
function handleDisconnect(client) {
    client.on('error', function (error) {
        if (!error.fatal) return;
        if (error.code !== 'PROTOCOL_CONNECTION_LOST') throw err;

        console.error('> Re-connecting lost MySQL connection: ' + error.stack);

        // NOTE: This assignment is to a variable from an outer scope; this is extremely important
        // If this said `client =` it wouldn't do what you want. The assignment here is implicitly changed
        // to `global.mysqlClient =` in node.
        mysqlClient = mysql.createConnection(client.config);
        handleDisconnect(mysqlClient);
        mysqlClient.connect();
    });
};




app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.all('/!*', function(request, response, next) {
    //response.header("Access-Control-Allow-Origin", "*");
    //response.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    //response.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
    if (request.method === 'OPTIONS') {
        response.status(200).end();
    } else {
        next();
    }
});


var routes = require('./app/routes/appRoutes'); //importing route
routes(app); //register the route
