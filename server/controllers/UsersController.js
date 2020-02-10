const Users = require('../models/Users')

module.exports = {
    find: function(params, callback){
        Users.find(params,'_id name mail image birthday address', function(err, results){
            if(err){
                callback(err, null);
                return;
            }
            callback(null, results);
        })
    },

    findById: function(id, callback){
        Users.findById(id, function(err, results){
            if(err){
                callback(err, null);
                return;
            }
            callback(null, results);
        })
    },

    create: function(params, callback){
        Users.create(params, function(err, result){
            if(err){
                callback(err, null);
                return
            }
            callback(null, result);
        });
    }
}