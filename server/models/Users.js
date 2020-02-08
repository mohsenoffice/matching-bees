const mongoose = require('mongoose');  

const UsersSchema = new mongoose.Schema({ 
    id: String, 
    name: String,
    mail: String,
    address: String,
    birthday: {
        type: Date,
        required: true,
        default: new Date()
    }      
});

mongoose.model('Users', UsersSchema);

module.exports = mongoose.model('Users');