const defaultState = {
    networks:[],
    likedNetowrks:localStorage.likedNetworks || []
}

export const networksReducer = (state = defaultState, action) => {
    switch (action.type){
        case "FETCH_NETWORKS":
            return {...state, networks:action.payload}
        case "LIKE_NETWORK":
            return {...state, likedNetowrks:[...state.likedNetowrks, action.payload]}
        case "DISLIKE_NETWORK":
            return {...state, likedNetowrks:action.payload}
        default:
            return state
    }
}