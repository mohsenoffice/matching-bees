const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')

router.get('/', function(req, res, next) {
    usersController.find(req.query, function(err, results){
        if(err){
            console.log(err);
            res.json({
                success: 0,
                error: err
            });
            return;
        }
        res.json({
            success: 1,
            data: results
        });
    });
});

router.get('/:id', function(req, res, next){
    const id = req.params.id;
    
        usersController.findById(id, function(err, result){
        
            if(err){
                console.log(err);
                res.status(500).json({
                    success: 0,
                    data: result
                });
                return;
            }
            res.status(200).json({
                success: 1,
                data: result
            });
        });

});

router.post('/', function(req, res, next) {
    usersController.create(req.body, function(err, result){
        if(err){  
            console.log(err);
            res.json({
                success: 0,
                error: err
            })
            return;
        }

        res.json({
            success: 1,
            data: result
        });
    });
});

router.put('/', function(req, res, next) {
    usersController.findByIdAndUpdate(req.body, function(err, result){
        if(err){  
            console.log(err);
            res.json({
                success: 0,
                error: err
            })
            return;
        }

        res.json({
            success: 1,
            data: result
        });
    });
});


router.delete('/', function(req, res, next) {
    usersController.findByIdAndRemove(req.body, function(err, result){
        if(err){  
            console.log(err);
            res.json({
                success: 0,
                error: err
            })
            return;
        }

        res.json({
            success: 1,
            data: result
        });
    });
});

module.exports = router