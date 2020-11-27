const express = require('express');
const http    = require('http');
const socketio  = require('socket.io');
const path    = require('path');
const Socket = require('./socket');


class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        //http server
        this.server = http.createServer(this.app);

        //configuraciones de socket
        this.io = socketio(this.server,{/* configuracion */});
    };

    middelwares(){
        //despliegue del directorio publico
        this.app.use( express.static( path.resolve( __dirname, '../public')))
    };
    socketConfig(){
        new Socket( this.io );
    }

    execute(){
        //Inicializar el middelwares
        this.middelwares();
        //Inicializar Sockets
        this.socketConfig();

        this.server.listen(this.port, () =>{
            console.log('servidor corriendo en el puerto:', this.port)
        });
    };
}
module.exports = Server