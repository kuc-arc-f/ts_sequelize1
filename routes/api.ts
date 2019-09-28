import {NextFunction, Request, Response} from "express";
var express = require('express');
var router = express.Router();
var models = require("../models");

/* GET users listing. */
router.get('/', function(req: Request, res: Response, next: NextFunction) {
    res.send('respond with a resource-1234');
});
/******************************** 
* 
*********************************/
router.get('/tasks_index', function(req: Request, res: Response, next: NextFunction ) {
    models.Task.findAll({
        order: [
            ['id', 'DESC'],
        ],                    
    }).then((result:any) => {
        var items = result
        items.forEach( function (item: any[]) {
//                console.log( item);
        });
        var param = {"result": result};
        res.json(param);
    });
});
/******************************** 
* 
*********************************/
router.post('/tasks_new', (req: Request, res: Response) => {
    var obj = req.body;
console.log(obj );
	models.Task.create({
        title: obj.title,
        content: obj.content,
	})
	.then((result:any) => {
        res.json(req.body);
    }); 

}); 
/******************************** 
* 
*********************************/
router.get('/tasks_show/:id', function(req: Request, res: Response) {
console.log( req.params.id );
    models.Task.findOne({
        where: {
        id: req.params.id,
        }
    })
    .then((result: any) => {
        var param = {"result": result};
        res.json(param);
    });      
});
/******************************** 
* 
*********************************/
router.post('/tasks_update', (req: Request, res: Response) => {
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
router.get('/tasks_delete/:id', function(req: Request, res: Response) {
    models.Task.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(() => { 
        res.json( req.params.id);
    });
});
/******************************** 
* 
*********************************/
router.get('/test1', function(req: Request, res: Response, next: NextFunction ) {
    models.User.findAll({
        order: [
            ['id', 'DESC'],
        ],                    
    }).then((result:any) => {
        var items = result
        items.forEach( function (item: any[]) {
                console.log( item);
        });
        var param = {"result": result};
        res.json(param);
    });
});

export {router as apiRouter}
