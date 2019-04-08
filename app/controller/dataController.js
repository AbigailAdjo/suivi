/**
 * Created by Adjo Abigail YETE on 3/18/19.
 */

'use strict';

var Model = require('../model/dataModel.js');

exports.etatComptes = function(req, res) {
    Model.etatComptes(function (err, result) {
        if (err) res.send(err);
        else res.send(result);
    });
};

exports.histoGtp = function(req, res) {
    Model.histoGtp(function (err, result) {
        if (err) res.send(err);
        else res.send(result);
    });
};

exports.allTransactions = function(req, res) {
    Model.allTransactions(function (err, result) {
        if (err) res.send(err);
        else res.send(result);
    });
};

exports.allUnFilteredTransactions = function(req, res) {
    Model.allUnFilteredTransactions(function (err, result) {
        if (err) res.send(err);
        else res.send(result);
    });
};
