import classes from './Product.module.css';
import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

import CartIcon from '../../UI/Icon/CartIcon';
const Product=(props)=>{
   //console.log(props)
   
    return(
        <div className={classes.cardContainer}  >
        <div className={classes.card}  >
            
        <Link to={`/product/${props.data.id}`} >
        <div  >
            <img style={{width:'150px',height:'200px'}} src={props.data.image} alt={props.data.title}/>
        </div>
            <div>
            {props.data.title}
            </div>
            <div className={classes.price} >${props.data.price}
            </div>
            <div>{props.data.category}</div>
            </Link>
            <div>
            <button onClick={()=>props.addItem(props.data)} className={classes.addToCart} >Add To Cart<CartIcon/></button>
                
            </div>
            </div> 
        </div>
    )
}

export default Product;
