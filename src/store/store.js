import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { networksReducer } from "./redusers/networksReduser";
import { stationsReducer } from "./redusers/stationsReduser";

const rootReducer = combineReducers({
    networks:networksReducer,
    stations:stationsReducer
})

export const store = createStore(rootReducer, composeWithDevTools())