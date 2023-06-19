import React from 'react'
import './css/Filter.css'
import {Link} from 'react-router-dom';
const Filters = () => {
  return (
        <div className = "filters">
        <div className='title'><h1>Brands</h1></div>
        <ul className='side-brand'>
                <li><Link to="/size" >Lakme</Link></li>
                <li><Link to="/size">Faces Canada</Link></li>
                <li><Link to="/size">Sugar</Link></li>
        </ul>
        
        <div className='title'><h1>Size</h1></div>
        <ul className='side-size'>
            <Link to="/size"><button value={1} >1</button></Link>
            <Link to="/size"><button value={2} >2</button></Link>
            <Link to="/size"><button value={3} >3</button></Link>
        </ul>
    </div>
  )
}

export default Filters