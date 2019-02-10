
module.exports=function(){
    var db=require('../libs/db-conection')();
    var schema=require('mongoose').Schema;
    
    var receta=schema({
        title:{type:String,required: true},
        descripcion:{type:String,required: true},
        ingredientes:{type:[String],required: true},
        status:{type:Boolean,required: true}
    });
    return db.model('recetas',receta);
}