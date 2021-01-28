require( 'dotenv' ).config( );
import express  from 'express';
import bp       from 'body-parser'
import CORS     from 'cors';

import room from './routes/room'
import card from './routes/card'

interface App {
    express: Express.Application
    initializationFunctions:Function[];
}
class App implements App {
    constructor ( ) {
        const app = express( );

        app.use( CORS( ) );
        app.use( bp.json( ) );
        app.use( bp.urlencoded( { extended: false } ) );

        app.use( '/room', room );
        app.use( '/card', card );

        this.express = app;
        return this;
    }
}

export default new App( );