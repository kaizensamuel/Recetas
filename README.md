# Recetas
Servicio web de almacenamiento, añadir, editar y borrar  recetas

# Herramientas a usar

- Lenguaje de programación usado JavaScript (usando Nodejs para el lado servidor).
- MongoDB Bases de datos NoSQL para la BD de recetas.
- Express como framework de node.
- ejs gestor de plantillas embebidas.
- Mongoose el cual nos provee esquemas para interactuar con mongodb.
- Body-parser para acceder a los envíos por post y acceder a los valores enviados desde node.
- Nodemon para que el servidor se reinicie cada vez que hagamos algún cambio en el código.
- logstash para manejar los logs del sistema.
- mocha y chai para los test.
- travisCI como sistema de integración continua.

## Instalación y Configuración de herramientas.

- Vamos a la web de NodeJS https://nodejs.org/es/ en  mi caso la versión mas reciente es la 10.15.1 LTS y la instalamos.
  
  -Instalamos las demás dependencias de producción y desarrollo, etc...., con los siguientes comandos:  
      
      npm i ejs express mongoose body-parser logstash 
      //que serian nustras dependencias de produccion es decir
      //que nuestra app necesita para funcionar correctamente
      npm i nodemon -D //como dependencia de desarrollo
    
      
- Vamos a la web de MongoDB https://www.mongodb.com/download-center/community  nos descargamos el instalador e instalamos 
en w10 además hay que hacer después de la instalación varias cosas:
   - Añadimos a variables de entorno la carpeta C:\Program Files\MongoDB\Server\4.0\bin para poder ejecutar mongo sin errores desde cualquier lado.
   - Tenemos que crear en C:\ la carpeta data y dentro de esta otra llamada db puesto que nos la requiere mongo para  su buen funcionamiento.

## Modelo Usad

Tendré un modelo llamado receta que sera cada objeto que se guarde en nuestra bd el cual esta compuesto por:


        title:{type:String,required: true},
        descripcion:{type:String,required: true},
        ingredientes:{type:[String],required: true},
        status:{type:Boolean,required: true}

## Integración Continua

.travis.yml archivo en el cual le decimos a travis el lenguaje usado

    language: node_js
    node_js:
      - "10.15.1"
    services:
      - mongodb

## Test

Los test se han realizado sobre el modelo recetas con operaciones sobre  bd comprobando que todo se haga correctamente y falle cuando tiene que fallar el archivo creado para los test es recetas.test.js para ejecutar dichos test basta con ponerse en el directorio del proyecto y ejecutar:

         npm tets el cual mostrara si se han pasado dichos test.
