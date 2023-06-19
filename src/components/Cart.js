import React from 'react'
import { CartState } from './context/Context'
import {MdDeleteForever} from 'react-icons/md'
import './css/Home.css'
const Cart = () => {
 const{state:{cart},dispatch} =CartState();
  return (
    <div className='home'>
      <div className='cart-productcontainer'>
          {
            cart.map(prod=>
             <div key='prod.id' className='cart-product'>
                      <div><img src={prod.image} alt={prod.alt} /></div>
                      <div><h4>${prod.rate}</h4></div>
                      <div><h4>{prod.brand}</h4></div>
                      <div><button onClick={()=>{
                           dispatch({
                              type:"REMOVE_FROM_CART",
                              payload:prod
                           })
                        }}><MdDeleteForever font-size='30px'></MdDeleteForever></button></div>
             </div>
)
          }
      </div>
      <div>
        
      </div>
    </div>
)
}

export default Cart;