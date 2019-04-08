/**
 * Created by Adjo Abigail YETE on 3/18/19.
 */
'use strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    port     : '3306',
    password : 'EYGtpv96362',
    database : 'postecash',
    socketPath: '/var/lib/mysql/mysql.sock'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;