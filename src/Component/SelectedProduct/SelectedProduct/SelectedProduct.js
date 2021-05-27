import classes from './selectedProduct.module.css';
import React from 'react';

const SelectedProduct=(props)=>{
     //console.log(props) 
     //props.match.path=''
    return(
        <div className={classes.card}>
        <div>
            <img width='100px' src={props.image} />
        </div>
            <div>{props.title}</div>
            <div>${props.price}</div>
            <div >
            <button className={classes.btn} onClick={()=>props.removeFromCart(props.index)} >Remove from cart</button>
            </div>
        </div>
    )
}
export default SelectedProduct;