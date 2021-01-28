import mongoose from 'mongoose';
import { RoomConfig, RoomProps } from "./types/Room.type";

interface Room {
    props:RoomProps
}
class Room {
    constructor ( config:RoomConfig ) {
        this.props = {
            id: new mongoose.Types.ObjectId().toHexString(),
            config: {
                hand_count: config?.hand_count || 10,
                max_players: config?.max_players || 8
            },
            state: {
                player_count: 0,
                players: [],
                current_black: undefined,
                black_stack: []
            }
        }
        return this;
    }
}

export default Room;