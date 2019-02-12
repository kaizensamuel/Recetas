const express= require('express');
const path=require('path');
const logger= require('morgan');
const bodyParser= require('body-parser');
const indexRoutes=require('./routes/index');

const app=express();


app.set('port', process.env.port || 3000);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');


//middlewares
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended:false}));

//routes

app.use('/',indexRoutes);


app.listen(process.env.PORT || 3000,()=>{
    console.log('server on port ',app.get('port'));
});