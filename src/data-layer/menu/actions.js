import * as ActionTypes from "./constants";

export const hideMenu = () => dispatch => dispatch({
	type: ActionTypes.HIDE_MENU
})

export const showMenu = () => dispatch => dispatch({
	type: ActionTypes.SHOW_MENU
})

export const toggleMenu = () => dispatch => dispatch({
	type: ActionTypes.TOGGLE_MENU
})