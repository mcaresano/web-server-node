const http = require('http');

// Crea el servidor
http.createServer((req, res)=>{

    res.write('Hola mundo');
    res.end()

    //console.log("----------- request :", req.headers);
    //res.writeHead('200',{'Content-Type':'test/plain'}) // archivo de texto plano
    
   /*
    // para descargar un archivo csv es necesario agregar el header tbn y el nombre del archivo
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    res.writeHead('200',{'Content-Type':'application/csv'}) // archivo de texto plano
    
    res.write( 'ID; nombre\n' );  // ver cual es el separador de filas. en este caso es ";"
    res.write( '1; Victoria\n' );
    res.write( '2; Marcelo\n' );
    res.write( '3; Maria\n' );
    res.write( '4; Carolina\n' );
    res.write( '5; Sofia\n' );
    res.end() // informa que se termino la rta
    */
        
    /*
    res.writeHead('200',{'Content-Type':'application/json'}) // informo el msj de error
    const persona = {
        id:1,
        nombre:'Marcelo'
    }
    res.write(JSON.stringify(persona))
    res.end() // informa que se termino la rta
    */
}).listen(8080);
console.log("Escuchando en el puerto 8080");