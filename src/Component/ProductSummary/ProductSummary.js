import classes from './productSummary.module.css';
import React from 'react';

const productSummary=(props)=>{
    return(
        <div>
            <div className={classes.ProductSummary} > <h2> Toal Amount :  {props.totalAmount.toFixed(2)} </h2> </div>
            <button className={classes.ProductSummaryBtn} onClick={props.clicked} >Confirm Purchase</button>

        </div>
    );
}
export default productSummary;