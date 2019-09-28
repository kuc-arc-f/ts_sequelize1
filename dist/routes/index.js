"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
//const path = require('path');
const router = express.Router();
exports.indexRouter = router;
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
    //  res.send('respond with a resource-1122');
});
