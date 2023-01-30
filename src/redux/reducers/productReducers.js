import { ADD_PRODUCT, LOAD_PRODUCT } from "../actionTypes/actionTypes";

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

    default:
      return state;
  }
};

export default productReducers;
