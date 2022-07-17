import { createStore } from "redux";

const defaultState = {
    networks:[]
}

const reducer = (state = defaultState, action) => {
    switch (action.type){
        case "FETCH_NETWORKS":
            return {...state, networks:action.payload}
        default:
            return state
    }
}

export const store = createStore(reducer)