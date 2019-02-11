const mongoose=require('mongoose');

let db;

module.exports=function (){
    if(!db){
        db=mongoose.createConnection('mongodb://sarez:501haxSAM-@cluster0-efv4a.mongodb.net/admin',{useNewUrlParser: true});
    }
    
    return db;
};