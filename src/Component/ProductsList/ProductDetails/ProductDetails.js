import axios from 'axios';
import {useLocation} from 'react-router-dom';
import React,{useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import classes from './ProductDetails.module.css';
import {setDetails,removeDetails,addToCart} from '../../../Redux/actions/productsAction';
import Header from '../../Header/Header';
import CartIcon from '../../UI/Icon/CartIcon';
const ProductDetails=()=>{ 
    //console.log(props)
    //const [shouldUpdate,setShouldUpdate]=useState(false);
    const cartItemsList= useSelector((state)=>state.addToCart);
    const productDetail=useSelector((state)=>state.product)
    const [newCartList,setNewCartList]=useState([]);
    let location=useLocation();
    const dispatch=useDispatch();
    const {productId}=useParams();
    const fetchDetail=async(id)=>{
        const detailData= await axios.get(`https://fakestoreapi.com/products/${id}`)
        .catch((e)=>{console.log(e)})
        dispatch(setDetails(detailData.data));
    
    }
    useEffect(()=>{
        if(productId && productId!==""){ 
        fetchDetail(productId);
        setNewCartList(cartItemsList.cart);
        }
        //setShouldUpdate(true);
        //console.log("render")

        return(()=>{
            dispatch(removeDetails())
        })

    },[productId])
    const addItemsToCart=(product)=>{
        let cart=null;
        cart=newCartList;
        cart.push(product);
        setNewCartList(cart);
        
          dispatch(addToCart(newCartList));   
    }
    return ( 
    <div>
    <Header/>
    <div className={classes.ProductDetails} >
    <div >
    <img className={classes.img} style={{width:'400px'}} src={productDetail.image}/>
    </div>
    <div className={classes.purchaseContainer}>
    <div className={classes.cardPrice} >
    ${productDetail.price}
    </div>
    <div onClick={()=>{addItemsToCart(productDetail)}} className={classes.cartContainer} >
       Add To Cart 
        </div>
    </div>
    <div className={classes.detailsContainer}>
    <div style={{marginBottom:'15px'}}>
    {productDetail.title}
    </div>
    <div>
    {productDetail.description}
    </div>
    </div>
    </div>
    </div>
    
    )
}

export default ProductDetails;