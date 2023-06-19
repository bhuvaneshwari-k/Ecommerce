import React from 'react';
import {Link} from 'react-router-dom';
import {FaShoppingCart} from 'react-icons/fa';
import {BiSearchAlt} from 'react-icons/bi';
import './css/Header.css';
import { CartState } from './context/Context';
const Header = () => {
  const{state:{cart}}= CartState();
  return (
    <div>
        <div className='navbar'>
            <div className="brand"><Link to='/'><h1>PURPLLE</h1></Link></div>
            <div className='search'>
                <input type="text" placeholder='search a product'></input>
                <BiSearchAlt color='white' fontSize='35px'></BiSearchAlt>
            </div>
            <div className='carticon'>
            <Link to='/cart'><button  className="cartbtn">
                   <FaShoppingCart color='white' fontSize='35px'></FaShoppingCart>
                  {cart.length}
                </button>
              </Link>
            </div>
        </div>
    </div>
  )
}

export default Header;