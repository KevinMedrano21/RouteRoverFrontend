const express = require('express');
const router = express.Router();
const request = require('request');



router.get('/ver', async (req, res) => {
    // Realizar la llamada a la API
    request('https://routerover3.onrender.com/ver', function (error, response , body){
        if (error) {
            console.error(error);
            res.status(500).send('Error interno del servidor');
            return;
        }
        // Verificar si la respuesta fue exitosa (código de estado 200)
        if (response && response.statusCode === 200) {
            // Parsear el cuerpo de la respuesta (si es necesario)
            const data = JSON.parse(body); // Asumiendo que la respuesta es un JSON
            // Renderizar la vista 'index.ejs' pasando los datos obtenidos de la API
            res.render('index.ejs', { data });
        } else {
            // Si la llamada a la API no fue exitosa, enviar un mensaje de error
            res.status(response.statusCode).send('Error al obtener los datos de la API');
        }
    });
});


module.exports = router;