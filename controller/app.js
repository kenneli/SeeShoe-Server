const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const urlEncodedParser = bodyParser.urlencoded({
    extended: false
});
const jsonParser = bodyParser.json();

const path = require('path');

const cors = require('cors');
app.use(urlEncodedParser);
app.use(jsonParser);
app.use(cors());
app.use(express.static(path.join(__dirname, "../public")));

const shoes = require('../model/shoes');
const user = require('../model/user');

app.get('/api/shoes', (req, res, next) => {
    shoes.getShoes((err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        res.status(200).send(result);
    });
});

app.get('/api/shoes/:id', (req, res, next) => {
    const id = req.params.id;
    shoes.getShoesId(id, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        res.status(200).send(result[0]);
    });
});

app.post('/api/shoes/', (req, res, next) => {
    const {
        name,
        description,
        images,
        price,
        quantity,
        item_code
    } = req.body;
    shoes.addShoes(name, description, images, price, quantity, item_code, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        res.status(200).send(result);
    });
});

app.put('/api/shoes/:id', (req, res, next) => {
    const { id } = req.params;
    const {
        name,
        description,
        images,
        price,
        quantity,
        item_code
    } = req.body;
    shoes.updateShoes(id, name, description, images, price, quantity, item_code, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        res.status(200).send(result);
    });
});

app.delete('/api/shoes/:id', (req, res, next) => {
    const { id } = req.params;
    shoes.deleteShoes(id, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        res.status(200).send(result);
    });
});

app.get('/api/user', (req, res, next) => {
    user.getUser((err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        res.status(200).send(result);
    });
});

app.post('/api/user/create-account', (req, res, next) => {
    const {
        nama,
        email,
        password
    } = req.body;
    user.addUser(nama, email, password, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        res.status(200).send(result);
    });
});

app.post('/api/user/login', (req, res, next) => {
    const {
        email,
        password
    } = req.body;
    user.loginUser(email, password, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        res.status(200).send(result);
    });
});

module.exports = app;
