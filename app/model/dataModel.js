/**
 * Created by Adjo Abigail YETE on 3/18/19.
 */

'use strict';
var sql = require('./db.js');

var Model = function(model){
    this.login = model.login;
    this.password = model.password;
};

Model.etatComptes = function etatComptes(result) {
    sql.query("Select * from etat_comptes", function (err, res) {

        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('tasks : ', res);

            result(null, res);
        }
    });
};

Model.histoGtp = function histoGtp(result) {
    sql.query("Select * from histo_gtp", function (err, res) {

        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('histo_gtp : ', res);

            result(null, res);
        }
    });
};

Model.allTransactions = function allTransactions(result) {
    sql.query("" +
        //"Select DISTINCT(s.label) " +
        "Select t.*, s.label, s.type_op, s.categorie, s.frais, c.banque " +
        "FROM transaction t " +
            "INNER JOIN service s on t.fk_service = s.rowid " +
            "INNER JOIN carte c ON t.fk_carte = c.rowid " + //en prod mettre c.numero
            //"INNER JOIN outer_partenaire_service o ON s.rowid = o.service " +
        "WHERE DATE(t.date_transaction)='2017-12-08'", function (err, res) {

        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('allTransactions : ', res);
            /*var allHours = [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                18,
                18,
                19,
                20,
                21,
                22,
                23,
            ];
            var amountDataProvider = [];
            var countDataProvider = [];

            var uba = res.filter(function (allTransactions) {
                return allTransactions.banque === "UBA";
            });
            var boa = res.filter(function (allTransactions) {
                return allTransactions.banque === "BOA";
            });

            for (var i = 0; i < allHours.length; i++) {
                var theuba = uba.filter(function (allTransactions) {
                    var finprev = new Date(allTransactions.date_transaction.substring(0, 10).replace(/-/g,"/"));
                    return finprev.getHours() == allHours[i];
                });
                var mtuba = additionner(theuba, "montant");
                var nbuba = theuba.length;


                var theboa = boa.filter(function (allTransactions) {
                    var finprev = new Date(allTransactions.date_transaction.substring(0, 10).replace(/-/g,"/"));
                    return finprev.getHours() == allHours[i];
                });
                var mtboa =  additionner(theboa, "montant");
                var nbboa = theboa.length;

                var theAmountDataProvider = {
                    year: ''+allHours[i]+' H',
                    v1: mtuba,
                    v2: mtboa,
                };

                var theCountDataProvider = {
                    year: ''+allHours[i]+' H',
                    v1: nbuba,
                    v2: nbboa,
                };
                amountDataProvider.push(theAmountDataProvider);
                countDataProvider.push(theCountDataProvider);
            }*/

            result(null, res);
        }
    });
};

Model.allUnFilteredTransactions = function allUnFilteredTransactions(result) {
    sql.query("" +
        //"Select DISTINCT(s.label) " +
        "Select t.*, s.label, s.type_op, s.categorie, s.frais, o.pourcentage_part, o.pourcentage_num, o.pourcentage_banque " +
        "FROM transaction t " +
            "INNER JOIN service s on t.fk_service = s.rowid " +
            //"INNER JOIN carte c ON t.fk_carte = c.rowid " + //en prod mettre c.numero
            "INNER JOIN outer_partenaire_service o ON s.rowid = o.service " +
        "WHERE DATE(t.date_transaction)='2017-12-08'", function (err, res) {

        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('allUnFilteredTransactions : ', res);

            result(null, res);
        }
    });
};


module.exports= Model;