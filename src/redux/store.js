import { applyMiddleware, createStore } from "redux";
import productReducers from "./reducers/productReducers";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";



const store = createStore(productReducers , composeWithDevTools(applyMiddleware(thunk)) 
);

export default store