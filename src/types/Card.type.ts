export type Card = {
    id:number,
    type:CardType,
    text:string
}

export type CardType = 'black' | 'white';