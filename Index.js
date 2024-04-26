const express = require('express');
const router = express.Router();
const path = require('path');
const app = express();
const request = require('request');
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views') )
app.set('views engine', 'ejs', );


request('https://routerover3.onrender.com/ver', function (error, response , body){
    console.error(error);
    console.log('statusCode', response && response.statusCode);
    console.log('body:', body);
});

app.listen(app.get('port'), ()=>{
    console.log('Servidor escuchando em el puerto:', app.get('port'));
});