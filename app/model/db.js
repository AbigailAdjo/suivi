/**
 * Created by Adjo Abigail YETE on 3/18/19.
 */
'use strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'fhbs.myd.sharedbox.com',
    user     : 'fhbs_pmpadmingtp',
    port     : '3306',
    password : '9Fz_QybKgcUm',
    database : 'fhbs_numheritlabscom231',
    //socketPath: '/tmp/mysql.sock'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;