import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'; 
import SelectedProduct from '../SelectedProduct/SelectedProduct';
import {addToCart} from '../../../Redux/actions/productsAction';
import Modal from '../../UI/Modal/Modal';
import ProductSummary from '../../ProductSummary/ProductSummary';
import classes from './SelectedProductsList.module.css';
const SelectedProductList=()=>{
    const [backDropShow,setbackDropShow]=useState(false);
    const [modalShow,setModalShow]=useState(false);
    const products= useSelector((state)=>state.addToCart.cart);
    //console.log(products.cart);
    let price=0;
    const dispatch=useDispatch();
    const removeFromCart=(index)=>{
        
       products[index-1]=null;
        let x= products.filter((e)=>e!=null)
        //products=x;
        dispatch(addToCart(x));

    }
    let i=0;
    const renderProductList=products.map((product)=>{
            price+=product.price;
            i++;
        return <SelectedProduct key={i} index={i} image={product.image} title={product.title} price={product.price} removeFromCart={removeFromCart} />
    })
    const modalOpen=()=>{
        setModalShow(true);
        backdropToggler();
    }
    const modalClose=()=>{
        setModalShow(false);
        backdropToggler();
    }
    const backdropToggler=()=>{
        const prevState=backDropShow;
        setbackDropShow(!prevState);
    }
    const confirmPurchase=()=>{
        dispatch(addToCart([]))
        modalClose();
    }
    let purchaseInfo=<div className={classes.emptyCart}>
    <h2> Total : {price.toFixed(2)}</h2>
    <div><button onClick={modalOpen} >Purchase</button> </div>
    </div>
    if(products.length<=0){
        purchaseInfo=<div>Cart Is Empty</div>
    }
    return (
        <div style={{display:'flex',width:'100%',flexDirection:'column',alignItems:'center'}}>
        <Modal show={modalShow}  clicked={modalClose}>
        <ProductSummary clicked={confirmPurchase} totalAmount={price} />
        </Modal>
        <div >
        {renderProductList}
        </div>
        <div>
        {purchaseInfo}
        </div>
        </div>
    )
}

export default SelectedProductList;