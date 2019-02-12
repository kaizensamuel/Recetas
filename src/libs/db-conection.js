const mongoose=require('mongoose');

let db;

module.exports=function (){
    if(!db){
        db=mongoose.createConnection('mongodb+srv://sarez:501haxSAM-@cluster0-efv4a.mongodb.net/recetas?retryWrites=true',{useNewUrlParser: true});
    }
    
    return db;
};