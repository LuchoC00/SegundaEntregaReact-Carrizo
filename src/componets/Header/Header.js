import React from 'react';
import "./Header.css";

import NavBar from '../NavBar/NavBar';
import ItemListContainer from '../ItemListContainer/ItemListContainer';

const Header = () => {
  return (
    <div>
      <NavBar/>
      <ItemListContainer mensaje="Bienvenidos a nuestra pagina de ventas" Color="#B9B9B9" bgColor="#1B1B1B"/>
    </div>
  )
}

export default Header