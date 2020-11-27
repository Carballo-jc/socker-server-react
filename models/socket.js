

class Socket {
    constructor( io ){

        this.io = io;
        this.socketEvents();
    }

    socketEvents(){
        //On Connection
        this.io.on('connection', ( socket ) => { 

            //escuchar los eventos
            socket.on('message-to-server', ( data)=>{
                console.log(data);
                this.io.emit('message-from-serve', data);
            });

        
         });
    }
}
module.exports = Socket;