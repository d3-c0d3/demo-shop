import axios from 'axios';
import React, { useEffect,useState } from 'react'
import {setProducts,addToCart} from '../../Redux/actions/productsAction'
import { useDispatch, useSelector } from 'react-redux';
import Product from './Product/Product';
import Header from '../Header/Header';
import SearchBar from '../UI/SearchBar/SearchBar';
const ProductsList=()=>{
    const products= useSelector((state)=>state.allProducts.products);
    const cartItemsList= useSelector((state)=>state.addToCart);
    const [cartList,setCartList]=useState([]);
    //console.log(cartList);
    const [shouldUpdate,setShouldUpdate]=useState(false);
    let filterProductsList=products;
    const dispatch=useDispatch();
    const fetchProducts=async()=>{
        const response=await axios.get("https://fakestoreapi.com/products")
        .catch((err)=>{
            console.log(err);
        })
        dispatch(setProducts(response.data));
        setShouldUpdate(true)
    }
    useEffect(()=>{
        fetchProducts();
        setList(products);
        //console.log(cartItemsList);
        setCartList(cartItemsList.cart);
    },[shouldUpdate]);
    const addItemToCart=(product)=>{
        let prevCart=null;
        prevCart=cartList;
        prevCart.push(product);
        setCartList(prevCart);
        dispatch(addToCart(cartList));
        
    }
    const [productList,setList]=useState(products);
    const onInputChange=(event)=>{
        filterProductsList=products.map((product)=>{
            if(product.title.toLowerCase().includes(event.target.value.toLowerCase())){
                return product;
            }
            return 'empty';
        })
        setList(filterProductsList.filter((data)=>data!=='empty'));
    }
    let renderList=null;
   // console.log(productList)
   /*  renderList=productList.map((product)=>{
        return  <Product key={product.id} addItem={addItemToCart} data={product} />
    }) */
    return (
        <div >
        <div style={{}}>
        <Header>
            <SearchBar  onInputChange={onInputChange} placeholder="Search Bar" />
        </Header>
        </div>
        <div style={{marginTop:"60px"}}>
       
        {productList.map((product)=>{
            return  <Product key={product.id} addItem={addItemToCart} data={product} />
        })
    }
       
        </div>
        </div>
    )
}

export default ProductsList;