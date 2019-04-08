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
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;