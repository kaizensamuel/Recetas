# Recetas
Servicio web de almacenamiento, el cual nos permitira añadir,editar y borrar  recetas de la base de datos.

# Herramientas a usar

- Lenguaje de programación usado JavaScript (usando Nodejs para el lado servidor).
- MongoDB Bases de datos NoSQL para la BD de recetas.
- Express como framework de node.
- ejs gestor de plantillas embebidas.
- Mongoose el cual nos provee esquemas para interactuar con mongodb.
- Body-parser para acceder a los envíos por post y acceder a los valores enviados desde node.
- Morgan.
- Nodemon para que el servidor se reinicie cada vez que hagamos algún cambio en el código.
- logstash para manejar los logs del sistema.


## Instalación y Configuración de herramientas.

- Vamos a la web de NodeJS https://nodejs.org/es/ en  mi caso la versión mas reciente es la 10.15.1 LTS y la instalamos.
  
  -Instalamos las demás dependencias de producción y desarrollo, etc...., con los siguientes comandos:  
      
      npm i ejs express mongoose body-parser morgan logstash 
      //que serian nustras dependencias de produccion es decir
      //que nuestra app necesita para funcionar correctamente
      npm i nodemon -D //como dependencia de desarrollo
    
      
- Vamos a la web de MongoDB https://www.mongodb.com/download-center/community  nos descargamos el instalador e instalamos 
en w10 además hay que hacer después de la instalación varias cosas:
   - Añadimos a variables de entorno la carpeta C:\Program Files\MongoDB\Server\4.0\bin para poder ejecutar mongo sin errores desde cualquier lado.
   - Tenemos que crear en C:\ la carpeta data y dentro de esta otra llamada db puesto que nos la requiere mongo para  su buen funcionamiento.

