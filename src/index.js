const express = require('express');
const clienteRoutes= require('./routes/cliente-routes')
const mascotaRoutes= require('./routes/mascota-routes')

const app = express();


const host= 'localhost';
const port=4141;
app.set('port',port);
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(clienteRoutes);
app.use(mascotaRoutes);

// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
