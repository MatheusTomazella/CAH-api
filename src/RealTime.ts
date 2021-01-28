import { Server } from 'http';
const io = require( 'socket.io' );

interface RealTime {
    io:SocketIO.Server
}
class RealTime implements RealTime {
    constructor ( ) {
        return this;
    }
    startServer ( httpServer:Server ) {
        this.io = io( httpServer, 
        { cors: {
            origin: "*",
            methods: ["GET", "POST"],
        } } );
        this._initializeRoutes( );
    }
    closeServer ( ) {
        this.io.close( () => { console.log( 'Connection Closed' ) } );
    }
    _initializeRoutes ( ) {
        this.io.on( 'connect', ( socket:SocketIO.Socket ) => {
            console.log( socket.id );

            socket.on( 'echo', ( message:string ) => {
                console.log( message );
                this.echo( socket, message );
            } )
        } )
    }

    echo( socket:SocketIO.Socket, message:string ) {
        this.io.to( socket.id ).emit( message );
    }
}

export default new RealTime();