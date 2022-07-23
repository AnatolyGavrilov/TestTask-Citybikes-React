const defaultState = {
    stations:[],
    choosenNetwork:{}
}

export const stationsReducer = (state = defaultState, action) => {
    switch (action.type){
        case "CHOOSE_NETWORK":
            return {...state,choosenNetwork:action.payload.network.id, stations:action.payload}
        default:
            return state
    }
}