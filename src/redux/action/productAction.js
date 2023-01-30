import { LOAD_PRODUCT } from "../actionTypes/actionTypes"

export const loadProduct = data =>{
    return {
        type : LOAD_PRODUCT ,
        payload : data ,
    }
}