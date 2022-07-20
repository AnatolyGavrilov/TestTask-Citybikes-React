import { applyMiddleware } from "redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

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

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))