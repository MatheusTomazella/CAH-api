import app from './src/App'
import { initializeCards } from './src/data/initializeCards';
const server = require('http').Server( app.express );

//import realTime from './src/RealTime';

server.listen( process.env.PORT || 3305, ( error:any ) => {
    if ( error ) throw error;
    console.log( 'API Running',  );
} )

initializeCards();

//realTime.startServer( server );