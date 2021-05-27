import React from 'react';
import classes from './header.module.css';
import CartIcon from '../UI/Icon/CartIcon';
import { useSelector } from 'react-redux';
import {Link,BrowserRouter } from 'react-router-dom';

const Header=(props)=>{
   // console.log(props)
    const totalOnCart=useSelector((state)=>state.addToCart)
    return (
        <div className={classes.Header}>
            <div style={{color:'white'}} >Demo Shop</div>
            <div className={classes.componentContainer}>
            <div>
                {props.children}
            </div>
                <div style={{display:'flex'}} className={classes.CartIcon}>
                <Link  to={{
                    pathname:'/cart'
                }} >
                <CartIcon />
                </Link>
                <div>
                    {totalOnCart.cart.length>0?totalOnCart.cart.length:null}
                </div>
                </div>
            </div>
        </div>
    )
}

export default Header;