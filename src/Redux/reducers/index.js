import {combineReducers} from 'redux'
import {productReducer,productDetailReducer,productAddToCartReducer} from './productsReducer';

const reducers=combineReducers({
    allProducts:productReducer,
    product:productDetailReducer,
    addToCart:productAddToCartReducer
})

export default reducers;