const mongoose=require('mongoose');

let db;

module.exports=function (){
    if(!db){
        db=mongoose.createConnection('mongodb://localhost:27017/recetas',{useNewUrlParser: true});
    }
    
    return db;
};