import { ADD_PRODUCT, LOAD_PRODUCT , DELETE_PRODUCT, UPDATE_PRODUCT } from "../actionTypes/actionTypes";

export const loadProduct = (data) => {
  return {
    type: LOAD_PRODUCT,
    payload: data,
  };
};

export const addProduct = (data) => {
  return {
    type: ADD_PRODUCT,
    payload: data,
  };
};

export const deleteProduct = id =>{
  return {
    type: DELETE_PRODUCT ,
    payload : id,

  }
}
export const updateProduct = id =>{
  return {
    type: UPDATE_PRODUCT ,
    payload : id,

  }
}
