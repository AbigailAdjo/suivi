/**
 * Created by Adjo Abigail YETE on 3/18/19.
 */

'use strict';
var sql = require('./db.js');
var md5 = require('md5');

var User = function(user){
    this.login = user.login;
    this.password = user.password;
};

User.login = function login(login, password, result) {
    password = md5(password+"AZVERTI@RE2015");
    console.log(login+' '+password);
    sql.query("Select * from user WHERE login = ? AND password = ?", [login, password], function (err, res) {

        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('user : ', res);
            result(null, res);
        }
    });
};

module.exports= User;