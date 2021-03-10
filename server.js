const config = require('./config');

const express = require('express');

const cors = require('cors');

const fs = require('fs');

const app = express(),
      bodyParser = require("body-parser");
      port = config.PORT;

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

app.get(config.APIURL + '/banners', (req,res) => {
    res.json(loadJSON('server/banners/index.get.json'))
});

app.get(config.APIURL + '/categories', (req,res) => {
    res.json(loadJSON('server/categories/index.get.json'))
});

app.get(config.APIURL + '/products', (req,res) => {
    res.json(loadJSON('server/products/index.get.json'))
});

app.post(config.APIURL + '/addToCart', (req,res) => {
    console.log(req.body)
    res.json(loadJSON('server/addToCart/index.post.json'))
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});