const express = require('express');
const router = express.Router();
//const model = require('../model/valores')();

//const Valor = require('../model/valores');

router.get('/ver', async (req, res) => {
    const valores = "hola";
    console.log(valores);

    res.render('index.ejs',{valores});
});


module.exports = router;