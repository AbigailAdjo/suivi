/**
 * Created by Adjo Abigail YETE on 3/18/19.
 */

'use strict';

var Login = require('../model/loginModel.js');

exports.login = function(req, res) {
    var login_params = new Login(req.body);

    console.log(req.body);

    //handles null error
    if(!login_params.login){

        res.status(400).send({ error:true, message: 'Please provide login.' });

    }
    if(!login_params.password){

        res.status(400).send({ error:true, message: 'Please provide password.' });

    }
    else{
        Login.login(login_params.login, login_params.password, function (err, user) {
            if(err) res.send(err);
            else res.json(user);
        });
    }
};
