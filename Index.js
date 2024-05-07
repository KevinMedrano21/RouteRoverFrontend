const express = require('express');
const router = express.Router();
const path = require('path');
const app = express();
const request = require('request');
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/mapa', express.static(path.join(__dirname, 'public')));


const indexRoutes = require('./Routes/index.js');
app.use('/',indexRoutes);


request('https://routerover3.onrender.com/ver', function (error, response , body){
    console.error(error);
    console.log('statusCode', response && response.statusCode);
    console.log('body:', body);
});

// fetch('https://routerover3.onrender.com/ver')
//     .then(response => response.json)
//     .then(data => {
//         console.log(data)
//     })



//adminlte
// app.use('/admin', express.static('./node_modules/admin-lte-express/public'))
// app.use('/', require('admin-lte-express'))

app.listen(app.get('port'), ()=>{
    console.log('Servidor escuchando em el puerto:', app.get('port'));
});