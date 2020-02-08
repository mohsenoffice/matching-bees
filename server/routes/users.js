const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')

const fakeUsers = [{
    id: '1',
    name: 'Mohsen Abu Saleh',
    mail: 'mohsen.office@gmail.com'
}, {
    id: '2',
    name: 'Mohsen Abu Saleh2',
    mail: 'mohsen.office2@gmail.com'
}, {
    id: '3',
    name: 'Mohsen Abu Saleh3',
    mail: 'mohsen.office3@gmail.com'
},{
    id: '4',
    name: 'Mohsen Abu Saleh',
    mail: 'mohsen.office@gmail.com'
}, {
    id: '5',
    name: 'Mohsen Abu Saleh2',
    mail: 'mohsen.office2@gmail.com'
}, {
    id: '6',
    name: 'Mohsen Abu Saleh3',
    mail: 'mohsen.office3@gmail.com'
}];

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

module.exports = router