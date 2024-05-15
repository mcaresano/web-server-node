require('dotenv').config();

const express = require('express')
const app = express()


//const port = 8080
const hbs = require('hbs');
const port = process.env.PORT
console.log("port: ", port);
// utilizando handlebars
app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials');

// se agrega al path un segundo argumento con las props a mostrar en cada partial.
app.get('/', (req, res) => {
    res.render('home', {
        titulo : "Curso de node",
        etiquetaPagina : "Curso de node JS con handlebars"
    })
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        titulo : "Curso de node",
        etiquetaPagina : "Curso de node JS con handlebars"
    })
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        titulo : "Curso de node",
        etiquetaPagina : "Curso de node JS con handlebars"
    })
})


// servir contenido estático. para los middlewares. Toma la carpea publica para mostrar. ver ubicación si hay que cambiar el path
app.use(express.static('public'));

/* // Al agregar el path estático esta ruta principal ya no se utiliza ya que lo reemplaza.
app.get('/', (req, res) => {
  res.send('Hello World')
})*/

app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html')
  })
app.get('/elements', (req, res) => {
res.sendFile(__dirname + '/public/elements.html')
})

 // comodin para cualquier otra página 
app.get('*', (req, res) => {
  //res.send('Page not found ...')
  res.sendFile(__dirname + '/public/404.html')
 })

app.listen(port, ()=> {console.log(`Example app listen on port ${port}`)})