import { useSelector } from "react-redux"

// const networks = useSelector(state => state.networks.networks)

const defaultState = {
    stations:[],
    choosenNetwork:{}
}

export const stationsReducer = (state = defaultState, action) => {
    switch (action.type){
        case "CHOOSE_NETWORK":
            return {...state, choosenNetwork:action.payload.choosenNetwork, stations:action.payload.stations}
        default:
            return state
    }
}