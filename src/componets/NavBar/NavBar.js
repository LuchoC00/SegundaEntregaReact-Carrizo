import React from 'react'
import "./Navbar.css";
import CartWidget from '../CartWidget/CartWidget';
import LogoDevOutlinedIcon from '@mui/icons-material/LogoDevOutlined';


const NavBar = () => {
  return (
    <nav>
			<a href="https://www.coderhouse.com" target='blank' ><LogoDevOutlinedIcon color='secondary' fontSize='large'/></a>
			<ul className='navegacion'>
				<a className='links' href="https://www.coderhouse.com" target='blank' ><li>Inicio</li></a>
				<a className='links' href="https://www.coderhouse.com" target='blank' ><li>Promociones</li></a>
				<a className='links' href="https://www.coderhouse.com" target='blank' ><li>Sobre Nosotros</li></a>
				<a className='links' href="https://www.coderhouse.com" target='blank' ><li>Contacto</li></a>
			</ul>
			<CartWidget/>
		</nav>
	)
}

export default NavBar

