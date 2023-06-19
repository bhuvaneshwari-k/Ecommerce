import React from 'react';
import './css/Home.css';
import Filters from './Filters';
import { CartState } from './context/Context';
const Home = () => {
    const {state:{products}}=CartState();
    const {state:{cart},dispatch}=CartState();
    console.log(products);
    console.log(cart);
  return (
    <div className='home'>
        <Filters></Filters>
       <div className='productcontainer'>
             {
                products.map((prod)=>{
                   return <div key={prod.id} className='product'>
                      <img src={prod.image} alt={prod.alt} />
                        <h4>${prod.rate}</h4>
                        <h4>{prod.brand}</h4>
                       { cart.some((p) => p.id === prod.id)?(
                        <button className='cart-button' onClick={()=>{
                           dispatch({
                              type:"REMOVE_FROM_CART",
                              payload:prod
                           })
                        }}>Remove from Cart</button>)
                        :(<button className='cart-button' onClick={()=>{
                           dispatch({
                              type:"ADD_TO_CART",
                              payload:prod
                           })
                        }}>Add to Cart</button>)}
                      {/* <button className='cart-button' onClick={() => cart.addItem(prod)}>{cart.btn(prod) ? "Remove from Cart" : "Add to Cart"}</button> */}
                    </div>;
                })
             }
       </div>
    </div>
  );
};

export default Home