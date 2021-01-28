import Room from "../Room";
import { Card } from "../types/Card.type";
import { DatabaseIndex } from "../types/Database.type";
import { RoomProps } from "../types/Room.type";


interface ActiveElements {
    elements:{ [index: string]: any }
}
class ActiveElements {
    constructor ( ) {
        this.elements = { }
        return this;
    }
    remove ( elementId:DatabaseIndex ) {
        delete this.elements[ elementId ];
    }
    get ( elementId:DatabaseIndex ) {
        return this.elements[ elementId ];
    }
    all ( ) {
        const values = Object.values( this.elements );
        const props:RoomProps[] = [ ];
        values.forEach( room => {
            props.push( room.props );
        } )
        return props;
    }
    clear ( ) {
        this.elements = { };
    }
}

interface ActiveRooms {
    elements:{ [index:string]: Room }
}
class ActiveRooms extends ActiveElements {
    add ( room:Room ) {
        return this.elements[ room.props.id ] = room;
    }
}

interface CardList {
    elements: Card[]
}
class CardList {
    constructor ( ) {
        this.clear();
        return this;
    }
    add ( card:Card ) {
        this.elements[ card.id ] = card;
    }
    get ( elementId:number ) {
        return this.elements[ elementId ];
    }
    remove ( elementId:number ) {
        delete this.elements[ elementId ];
    }
    all ( ) {
        return this.elements;
    }
    clear ( ) {
        this.elements = [ ];
    }
}

export const activeRooms = new ActiveRooms();
export const cardLists = {
    white: new CardList(),
    black: new CardList()
}