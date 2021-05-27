import {ActionTypes} from '../constants/actionTypes';

export const setProducts=(products)=>{
    return{
        type:ActionTypes.SET_PRODUCTS,
        payload:products
    }
} 
export const setDetails=(product)=>{
    return{
        type:ActionTypes.SELECTED_PRODUCTS,
        payload:product
    }
}
export const removeDetails=()=>{
    return{
        type:ActionTypes.REMOVE_SELECTED_PRODUCTS
    }
}
export const addToCart=(productOnCart)=>{
    return {
        type:ActionTypes.ADD_TO_CART,
        payload:productOnCart
    }
}
