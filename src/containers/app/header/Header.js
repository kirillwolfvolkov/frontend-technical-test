import React from 'react';
import { connect } from "react-redux";
import { toggleMenu } from "data-layer/menu/actions";
import menu from "./menu.png";
import './Header.scss';

const Header = (props) => {
	return (
		<div className='header'>
			<div onClick={props.toggleMenu} className="burger">
				<img src={menu} alt=""/>
			</div>
		</div>
	);
}

export default connect(state => ({
	shown: state.menu.shown
}), { toggleMenu })(Header);