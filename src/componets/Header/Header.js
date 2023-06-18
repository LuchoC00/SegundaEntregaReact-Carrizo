import React from 'react';
import "./Header.css";

import NavBar from '../NavBar/NavBar';
import Mensaje from '../mensaje/Mensaje';

const Header = () => {
  return (
    <div>
      <NavBar/>
      <Mensaje mensaje="Bienvenidos a nuestra pagina de ventas" Color="#B9B9B9" bgColor="#1B1B1B"/>
    </div>
  )
}

export default Header