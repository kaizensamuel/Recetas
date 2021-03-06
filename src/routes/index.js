const express= require('express');
const routes= express.Router();


const model=require('../models/recetas')();
    
routes.get('/',(req,res)=>{
 var r;
    model.find({},(err,recetas)=>{
      return res.render('index',{title:'recetas', recetas: recetas});
      //  if(err) throw err;
        
       // 
    });
    //
    
    //res.send({ "status": "OK" });
    
});
routes.post('/anadirReceta',(req,resp)=>{
   let body =  req.body;
   body.status=false;
    var array=[];
     for (var i in body.ingredientes) {
       array.push(body.ingredientes[i]);
     }
  
   
    model.create({title:req.body.title,descripcion:req.body.elaboracion,ingredientes:array,status:"false"},(err,task)=>{
        
        if(err) throw err
        return  resp.redirect('/');
    });
});

routes.get('/receta/:id',(req,res)=>{
    let id=req.params.id;
  model.findById(id,(err,recetas)=>{
        if(err) throw err;
        recetas.status=!recetas.status;
      console.log(recetas.status);
        recetas.save()
          .then(()=> res.redirect('/'));
    });
   
    
});
routes.get('/eliminar/:id',(req,res)=>{
    let id=req.params.id;
  model.deleteOne({_id: id},(err,recetas)=>{
        if(err) throw err;
        return   res.redirect('/');
    });
   
    
});

module.exports=routes;