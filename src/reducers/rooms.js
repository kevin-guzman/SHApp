

export default (state=[],action)=>{
    switch(action.type){
        case 'ADD_ROOM':
            return state.concat([action.room])
        case 'REMOVE_ROOM':
            return state.filter((event)=> room.id != action.room.id )
        case 'CLEAR_ROOMS':
            return []
        default:
            return state
    }
}