import React from 'react'
import "./Navbar.css";
import CartWidget from '../CartWidget/CartWidget';
import LogoDevOutlinedIcon from '@mui/icons-material/LogoDevOutlined';
import { Link } from 'react-router-dom';
import DisplayNavBar from '../DisplayNavBar/DisplayNavBar';


const NavBar = () => {
	return (
    	<nav>
			<Link to={"/"}><LogoDevOutlinedIcon color='secondary' fontSize='large'/></Link>
			<ul className='navegacion'>
				<Link className='links' to="/" >home</Link>
				<Link className='links' to="/about" >about</Link>
				<DisplayNavBar/>
			</ul>
			<CartWidget/>
		</nav>
	)
}

export default NavBar

