
import React, { Component } from 'react';
import Header from './Component/Header/Header'
import {BrowserRouter,Switch,Route, Redirect} from 'react-router-dom'
import ProductsList from './Component/ProductsList/ProductsList';
import ProductDetails from './Component/ProductsList/ProductDetails/ProductDetails';
import SelectedProductList from './Component/SelectedProduct/SelectedProductList/SelectedProductList';

class App extends Component{
  
  render(){ 
  return (
    <div>
    <BrowserRouter>
    
    <Switch>
    <Route path='/demo-shop' exact component={ProductsList}/>
     <Route path='/product/:productId' component={ProductDetails} />
    <Route  to="/cart" component={SelectedProductList}/>
     </Switch>
    </BrowserRouter>
    </div>
  );
  }
}

export default App;
