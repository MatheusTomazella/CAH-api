import express from 'express';
import { activeRooms } from '../data/ActiveElements';
import generateError from '../factories/error.factory';
import Room from '../Room';

const router = express.Router();

router.get( '/:id?', ( request, response ) => {
    const id = request.params.id || request.query.id || request.body.id;
    if ( id ) {
        const room = activeRooms.get( id );
        if ( room ) response.status(200).json( room );
        else response.status(404).json( generateError( 'not_found' ) );
    }
    else response.status(200).json( activeRooms.all() );
} )

router.post( '/', ( request, response ) => {
    const room = new Room( request.body.config );
    activeRooms.add( room );
    response.status(200).json( activeRooms.get( room.props.id ) );
} )

export default router;