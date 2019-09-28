import {NextFunction, Request, Response} from "express";
const express = require('express');
const router = express.Router();

/******************************** 
* 
*********************************/
router.get('/', function(req: Request, res: Response, next: NextFunction) {
    res.render('tasks/index', {});
});
/******************************** 
* 
*********************************/
router.get('/new', function(req: Request, res: Response, next: NextFunction) {
    res.render('tasks/new', {});
});
/******************************** 
* 
*********************************/
router.get('/show/:id', function(req: Request, res: Response, next: NextFunction) {
console.log(req.params.id  );
    res.render('tasks/show', {"params_id": req.params.id });
});
/******************************** 
* 
*********************************/
router.get('/edit/:id', function(req: Request, res: Response, next: NextFunction) {
    res.render('tasks/edit', {"params_id": req.params.id });
});

export {router as tasksRouter}

