import React from 'react'
import "./Navbar.css";
import CartWidget from '../CartWidget/CartWidget';
import LogoDevOutlinedIcon from '@mui/icons-material/LogoDevOutlined';


const NavBar = () => {
	return (
    	<nav>
			<a href="https://www.coderhouse.com" target='blank' ><LogoDevOutlinedIcon color='secondary' fontSize='large'/></a>
			<ul className='navegacion'>
				<a className='links' href="https://www.coderhouse.com" target='blank' ><li>home</li></a>
				<a className='links' href="https://www.coderhouse.com" target='blank' ><li>category</li></a>
				<a className='links' href="https://www.coderhouse.com" target='blank' ><li>about</li></a>
			</ul>
			<CartWidget/>
		</nav>
	)
}

export default NavBar

