const defaultState = {
    networks:[]
}

export const networksReducer = (state = defaultState, action) => {
    switch (action.type){
        case "FETCH_NETWORKS":
            return {...state, networks:action.payload}
        default:
            return state
    }
}