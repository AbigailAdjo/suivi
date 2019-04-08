/**
 * Created by Adjo Abigail YETE on 3/18/19.
 */
'use strict';
module.exports = function(app) {
    var todoList = require('../controller/appController');
    var user = require('../controller/loginController');
    var data = require('../controller/dataController');


    // todoList Routes
    app.route('/tasks')
        .get(todoList.list_all_tasks)
        .post(todoList.create_a_task);

    app.route('/tasks/:taskId')
        .get(todoList.read_a_task)
        .put(todoList.update_a_task)
        .delete(todoList.delete_a_task);

    app.route('/login')
        .post(user.login);

    app.route('/etatComptes')
        .get(data.etatComptes);

    app.route('/histoGtp')
        .get(data.histoGtp);

    app.route('/allTransactions')
        .get(data.allTransactions);

    app.route('/allUnFilteredTransactions')
        .get(data.allUnFilteredTransactions);
};