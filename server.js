const express = require('express');

const cors = require('cors');

const fs = require('fs');

const app = express(),
      bodyParser = require("body-parser");
      port = 3000;

app.use(cors())

const users = [];

app.use(bodyParser.json());

app.use(express.static(process.cwd()+"/sabkabazaar/dist/sabkabazaar/"));

function loadJSON(fileName = ''){
    return JSON.parse(
        fs.existsSync(fileName)
        ?
        fs.readFileSync(fileName)
        :
        'null'
    )
}

app.get('/', (req,res) => {
    //res.send('App Works !!!!');
    console.log( '-------------' +  process.cwd() +"/sabkabazaar/dist/sabkabazaar/index.html");
    res.sendFile(process.cwd()+"/sabkabazaar/dist/sabkabazaar/index.html")
});

app.get('/api/banners', (req,res) => {
    res.json(loadJSON('server/banners/index.get.json'))
});

app.get('/api/categories', (req,res) => {
    res.json(loadJSON('server/categories/index.get.json'))
});

app.get('/api/products', (req,res) => {
    res.json(loadJSON('server/products/index.get.json'))
});

app.post('/api/addToCart', (req,res) => {
    res.json(loadJSON('server/addToCart/index.get.json'))
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});