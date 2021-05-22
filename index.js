const http=require('http');
const host= 'localhost';
const port=4141;

const requestListener= function(req, res) {
    res.writeHead(200);
    res.end('Hola mundo');
}


const server= http.createServer(requestListener);

server.listen(port,host, ()=>{
    console.log(`Nuestro servidor esta  corriendo en el puerto ${port} con el host ${host}`);

})
