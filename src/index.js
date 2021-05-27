import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './Redux/store';


ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
/* 


const increment=()=>{
  return {
    type:"Increment"
  }
}

const decrement=()=>{
  return {
    type:"Decrement"
  }
}

const counter=(state=0,action)=>{
 if(action.type==="Increment"){
   return state+1;
 }
 if(action.type==="Decrement"){
   return state-1;
 }
}
let store=createStore(counter);
store.dispatch(increment())
store.dispatch(increment())
store.subscribe(()=>{console.log(store.getState())})

*/