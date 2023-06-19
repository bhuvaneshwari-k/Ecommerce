import { useContext } from 'react';
import { createContext, useReducer } from 'react'
// import Cart from '../Cart';
// import { cartReducer } from './reducers';
const Cart=createContext();
const Context = ({children}) => {
  const products=[
  { id: 1, image: require("./images/product1.jpg"), alt: "Lipstick", brand: "Lakme", rate: 200.00 , size: '1' },
  { id: 2, image: require("./images/product2.jpg"), alt: "Lipstick", brand: "Sugar", rate: 300.00 , size: '2'},
  { id: 3, image: require("./images/product3.jpg"), alt: "Lipstick", brand: "Faces Canada", rate: 400.00 , size: '3'},
  { id: 4, image: require("./images/product4.jpg"), alt: "Lipstick", brand: "Sugar", rate: 150.00, size: '1'},
  { id: 5, image: require("./images/product5.jpg"), alt: "Lipstick", brand: "Lakme", rate: 250.00 , size: '2'},
  { id: 6, image: require("./images/product6.jpg"), alt: "Lipstick", brand: "Sugar", rate: 200.00 , size: '1'},
  { id: 7, image: require("./images/product7.jpg"), alt: "Lipstick", brand: "Faces Canada", rate: 450.00 , size: '3'},
  { id: 8, image: require("./images/product8.jpg"), alt: "Lipstick", brand: "Faces Canada", rate: 100.00 , size: '1'},
  { id: 9, image: require("./images/product9.jpg"), alt: "Lipstick", brand: "Lakme", rate: 350.00 , size: '2'},
  { id: 10, image: require("./images/product10.jpg"),alt:"Lipstick", brand: "Sugar", rate: 200.00 , size: '2'}
  ];
  
const[state,dispatch]=useReducer(cartReducer,{products:products,cart:[]})
// console.log(products);
  return (
    <Cart.Provider value={{state,dispatch}}>
      {children}
    </Cart.Provider>
  )
}
const cartReducer=(state,action)=>{
  switch(action.type){
     case "ADD_TO_CART":
         return {...state,cart:[...state.cart,{...action.payload,qty:1}]};
     case "REMOVE_FROM_CART":
          return {...state,cart:state.cart.filter(c=>c.id!==action.payload.id)};
     default:
         return state;
  }
 };

export default Context;
export const CartState=()=>{
  return useContext(Cart);
};