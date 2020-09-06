const mongo = require('mongoose');
const user = mongo.Schema


const proto = new user({
   
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    email:{
        type:String
    }


});
const used = mongo.model('user',proto);
module.exports = used;