process.env.NODE_ENV = 'test';

const mongoose=require('mongoose');

let db;
var should = require('chai').should();
//Require the dev-dependencies






db=mongoose.createConnection('mongodb://localhost:27017/recetas',{useNewUrlParser: true});
var schema=require('mongoose').Schema;
    
    var receta=schema({
        title:{type:String,required: true},
        descripcion:{type:String,required: true},
        ingredientes:{type:[String],required: true},
        status:{type:Boolean,required: true}
    });
    const m= db.model('recetas',receta);
describe('recetas', () => {
	beforeEach((done) => {
		m.deleteMany({}, (err) => { 
           done();           
        });       
	});
    
  describe('/ recetas', () => {
      it('it deberia obtener todas las recetas', (done) => {
                m.find({},(err,task)=>{
        			should.not.exist(err);
		        
		        
		    });       
             
            
      	 done();
         
      });
  });
  describe('/POST receta', () => {
      it('it esta peticion deberia fallar puesto que no paso campos requeridos', (done) => {
          let receta = {
              title: "Arroz",
              descripcion: "arroz cocido con manteca"
          }
            
            m.create(receta,(err,task)=>{
        			should.exist(err);
		        
		        
		    });                  
              done();
           
             });
          	it('it esta peticion deberia hacerse bien puesto que  paso campos requeridos', (done) => {
		          let receta = {
		              title: "Arroz2",
		              descripcion: "arroz cocido con manteca",
		              ingredientes:["arroz","manteca"],
		              status:true
		          }

		          m.create(receta,(err,task)=>{
        			should.exist(task);
		        
		        
		    });       
		          done();
            
      		});
      
  });
   
 
 

});