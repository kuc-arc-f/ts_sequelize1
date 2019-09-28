"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
exports.tasksRouter = router;
/********************************
*
*********************************/
router.get('/', function (req, res, next) {
    res.render('tasks/index', {});
});
/********************************
*
*********************************/
router.get('/new', function (req, res, next) {
    res.render('tasks/new', {});
});
/********************************
*
*********************************/
router.get('/show/:id', function (req, res, next) {
    console.log(req.params.id);
    res.render('tasks/show', { "params_id": req.params.id });
});
/********************************
*
*********************************/
router.get('/edit/:id', function (req, res, next) {
    res.render('tasks/edit', { "params_id": req.params.id });
});
