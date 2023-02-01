import {UPDATE_PRODUCT , ADD_PRODUCT, DELETE_PRODUCT, LOAD_PRODUCT } from "../actionTypes/actionTypes";

const initialState = {
  products: [],
};
const productReducers = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRODUCT:
      return {
        ...state,
        products: action.payload,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };

      case DELETE_PRODUCT: 
      return{
        ...state,
        products : state.products.filter(product => product._id !== action.payload)
      }
      case UPDATE_PRODUCT: 
      return{
        ...state,
        products : state.products.filter(product => product._id !== action.payload)
      }

    default:
      return state;
  }
};

export default productReducers;
