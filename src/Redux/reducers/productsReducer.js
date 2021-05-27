import {ActionTypes} from '../constants/actionTypes';

const initialState={
    products:[],
    
}
const initialCartState={
    cart:[]
}
export const productReducer=(state=initialState,actions)=>{
       if(actions.type === ActionTypes.SET_PRODUCTS){
           return{...state,products:actions.payload};
       }
       else{
           return state;
       }
}
export const productDetailReducer=(state={},action)=>{
    if(action.type === ActionTypes.SELECTED_PRODUCTS){
        return{
            ...state,...action.payload
        }
    }
    else if(action.type === ActionTypes.REMOVE_SELECTED_PRODUCTS){
        return {  }
    }
    else{
        return state
    }
}

export const productAddToCartReducer=(state=initialCartState,action)=>{
    if(action.type === ActionTypes.ADD_TO_CART){
        //console.log(action.payload);
        return{...state,cart:action.payload};
    }
    else{
        return state;
    }
}