import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk"; //--> mediador para asyncronia
import reducer from "./reducer";


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //--> para conectar con dev tools

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleware)) //--> para peticiones asincronas al servidor
);

export default store;