"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
//
const index_1 = require("./routes/index");
const tasks_1 = require("./routes/tasks");
//
const api_1 = require("./routes/api");
const app = express();
exports.app = app;
const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
// view engine setup
app.set('views', path.join(__dirname, '/../views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(function (req, res, next) {
    next();
});
//
app.use('/', index_1.indexRouter);
app.use('/tasks', tasks_1.tasksRouter);
//api
app.use('/api', api_1.apiRouter);
