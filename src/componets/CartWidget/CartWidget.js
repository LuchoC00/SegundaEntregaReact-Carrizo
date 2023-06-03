import React from 'react';
import "./CartWidget.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
  return (
    <div >
      <a className='cart' href="https://www.coderhouse.com" target='blank'>
        <ShoppingCartIcon/>
        <div className='fondoCircular'>
          5
        </div>
      </a>
    </div>
  )
}

export default CartWidget