import React from 'react';
import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavMenu>
				<NavLink to="/home" activeStyle>
						Home
					</NavLink>
					<NavLink to="/instructions" activeStyle>
						Instructions
					</NavLink>
					<NavLink to="/upload" activeStyle
					>Upload
					</NavLink>
				</NavMenu>
				<NavBtn>
					<NavBtnLink to='/sign-in'>Sign In</NavBtnLink>
				</NavBtn>
			</Nav>
		</>
	);
};

export default Navbar;
