const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;


//midleware es una instruccion o callbacks que se va a ejecutar siempre que una persona ponga una url, cualquier url
app.use(express.static(__dirname + '/public'));

//Express HBS engine. __dirname es tomar la url sin importar donde este mi app
hbs.registerPartials(__dirname + '/views/parciales');

app.set('view engine', 'hbs');



app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Yamilet',
    });

});

app.get('/about', (req, res) => {
    res.render('about');

});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});