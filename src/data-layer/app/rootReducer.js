import { combineReducers } from "redux";
import events from "data-layer/events/reducer"
import menu from "data-layer/menu/reducer";

export default combineReducers({
	menu,
	events
})
