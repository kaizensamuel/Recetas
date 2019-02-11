const mongoose=require('mongoose');

let db;

module.exports=function (){
    if(!db){
        db=mongoose.createConnection('mongodb://https://recetas-iv.herokuapp.com/recetas',{useNewUrlParser: true});
    }
    
    return db;
};