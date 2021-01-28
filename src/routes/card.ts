import express from 'express';
import { cardLists } from '../data/ActiveElements';
import generateError from '../factories/error.factory';
import { CardType } from '../types/Card.type';
const router = express.Router();

router.get( '/white/:id?', ( request, response ) => {
    handleCardRequest( 'white', request, response );
} )
router.get( '/black/:id?', ( request, response ) => {
    handleCardRequest( 'black', request, response );
} )
function handleCardRequest ( type:CardType, request:any, response:any ) {
    const id = request.params.id || request.query.id || request.body.id;
    if ( id ) {
        const card = cardLists[type].get( id );
        if ( card ) response.status(200).json( card );
        else response.status(404).json( generateError( 'not_found' ) );
    }
    else response.status(200).json( cardLists[type].all() );
}

export default router;