const express = require('express')
const router = express.Router()

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
    res.status(200).send({
      data: fakeUsers
    })
})

router.get('/:id', function(req, res, next){
    const id = req.params.id

    const picked = fakeUsers.find(o => o.id === id);

    res.status(200).send({
        data: picked
    })

})

module.exports = router