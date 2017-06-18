import * as React from "react";
import  ReactDOM from "react-dom";
import "./public/main.css";
import App  from"./components/App";
import {Provider} from "react-redux";
import {createStore} from "redux";
import  reducer from "./reducers/mainreducer"

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>   , document.getElementById("root")
);