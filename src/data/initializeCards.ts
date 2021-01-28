import fs from 'fs'
import { CardType } from "../types/Card.type";
import { cardLists } from './ActiveElements';

const cardFileList = {
    black: [ 'bcards.txt', 'bcards1.txt','bcards2.txt' ],
    white: [ 'wcards.txt' ]
}

function loadCardFiles ( type:CardType ) {
    const files = cardFileList[ type ];
    files.forEach( file => {
        fs.readFile( `./cards/${file}`, 'utf8', ( error, data ) => {
            if ( error ) console.log( error );
            else {
                const cards = data.split( '<>' );
                const lastId = cardLists[type].all().length;
                for ( let id = lastId+1; id < cards.length; id++ ) {
                    cardLists[type].add( {
                        id,
                        type,
                        text: cards[id]
                    } )
                }
            }
        } )
    } )
}

export function initializeCards ( ) {
    loadCardFiles( 'black' );
    loadCardFiles( 'white' );
}