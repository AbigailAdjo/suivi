/**
 * Created by Adjo Abigail YETE on 3/18/19.
 */
'use strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'nesz.myd.sharedbox.com',
    user     : 'nesz_postecash',
    port     : '3306',
    password : 'BzhKYlKxvcxp',
    database : 'nesz_postecash'
    //socketPath: '/tmp/mysql.sock'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;