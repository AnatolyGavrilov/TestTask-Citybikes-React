import React from 'react';
import style from './style.css'
import {useDispatch, useSelector} from "react-redux";
import {asyncDecrementCreator, asyncIncrementCreator, decrementCreator, incrementCreator} from "./store/countReducer";
import {fetchUsers} from "./store/userReducer";

const App = () => {


    return (
        <div className="app">
          
        </div>
    );
};

export default App;
