export function addRoom(room){
    return{
        type: 'ADD_ROOM',
        room
    }
}

export function removeRoom(room){
    return{
        type: 'REMOVE_ROOM',
        room
    }
}

export function clearRoom(room){
    return{
        type: 'CLEAR_ROOMS'
    }
}