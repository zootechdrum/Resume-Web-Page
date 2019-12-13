
const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 3000;


const app = express();
hbs.registerPartials(__dirname + '/views/partials')


app.use(express.static(__dirname + '/public'));


app.set('view engine','hbs');

app.get('/', (req,res) => {
    res.render('home.hbs',{
        pageTitle:"Home Page",
        likes:"I like to develop the web!",
    });
});


app.listen(port )