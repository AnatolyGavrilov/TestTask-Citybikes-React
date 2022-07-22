const defaultState = {
    stations:[],
}

export const stationsReducer = (state = defaultState, action) => {
    switch (action.type){
        case "CHOOSE_NETWORK":
            return {...state, stations:action.payload}
        default:
            return state
    }
}