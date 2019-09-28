import {NextFunction, Request, Response} from "express";
const express = require('express');
//const path = require('path');
const router = express.Router();

/* GET home page. */
router.get('/', function(req: Request, res: Response, next: NextFunction) {
  res.render('index', { title: 'Express' });
//  res.send('respond with a resource-1122');
});

export {router as indexRouter}
