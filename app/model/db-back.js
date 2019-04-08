/**
 * Created by Adjo Abigail YETE on 3/18/19.
 */
'use strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : '185.74.71.245',
    user     : 'root',
    port     : '3306',
    password : 'EYGtpv96362',
    database : 'nesz_postecash'
    //socketPath: '/tmp/mysql.sock'
});

connection.connect(function(err) {
    if (err) throw err;
});
handleDisconnect(connection);

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

module.exports = connection;