import React from "react";
import cx from "classnames";
import { connect } from "react-redux";
import { hideMenu } from "data-layer/menu/actions";
import cross from "./cross.png";
import "./Sidebar.scss";

export const Sidebar = (props) => {

	return (
		<div className={cx("sidebar", {
			"sidebar_shown": props.shown
		})}>
			<div className="menu">
				<div onClick={props.hideMenu} className="close">
					<img src={cross} alt=""/>
				</div>
				<div className="sidebar-container">
					{props.children}
				</div>
			</div>
		</div>
	)
}

export default connect(state => ({
	shown: state.menu.shown
}), { hideMenu })(Sidebar);