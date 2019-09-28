"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var router = express.Router();
exports.apiRouter = router;
var models = require("../models");
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource-1234');
});
/********************************
*
*********************************/
router.get('/tasks_index', function (req, res, next) {
    models.Task.findAll({
        order: [
            ['id', 'DESC'],
        ],
    }).then((result) => {
        var items = result;
        items.forEach(function (item) {
            //                console.log( item);
        });
        var param = { "result": result };
        res.json(param);
    });
});
/********************************
*
*********************************/
router.post('/tasks_new', (req, res) => {
    var obj = req.body;
    console.log(obj);
    models.Task.create({
        title: obj.title,
        content: obj.content,
    })
        .then((result) => {
        res.json(req.body);
    });
});
/********************************
*
*********************************/
router.get('/tasks_show/:id', function (req, res) {
    console.log(req.params.id);
    models.Task.findOne({
        where: {
            id: req.params.id,
        }
    })
        .then((result) => {
        var param = { "result": result };
        res.json(param);
    });
});
/********************************
*
*********************************/
router.post('/tasks_update', (req, res) => {
    var obj = req.body;
    models.Task.update({
        title: obj.title,
        content: obj.content,
    }, {
        where: {
            id: req.body.id
        },
        fields: [
            "title",
            "content"
        ]
    }).then(() => {
        res.json(req.body);
    });
});
/********************************
*
*********************************/
router.get('/tasks_delete/:id', function (req, res) {
    models.Task.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(() => {
        res.json(req.params.id);
    });
});
/********************************
*
*********************************/
router.get('/test1', function (req, res, next) {
    models.User.findAll({
        order: [
            ['id', 'DESC'],
        ],
    }).then((result) => {
        var items = result;
        items.forEach(function (item) {
            console.log(item);
        });
        var param = { "result": result };
        res.json(param);
    });
});
