import * as ActionTypes from "./constants";

const initialState = {
	shown: false
}

export default function menu(state = initialState, action) {
	const { type } = action;

	switch(type) {
		case ActionTypes.SHOW_MENU:
			return {
				...state,
				shown: true
			}

		case ActionTypes.HIDE_MENU:
			return {
				...state,
				shown: false
			}

		case ActionTypes.TOGGLE_MENU:
			return {
				...state,
				shown: !state.shown
			}

		default:
			return state;
	}
}