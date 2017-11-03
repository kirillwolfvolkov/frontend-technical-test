import { CALL_API } from "redux-api-middleware";
import * as ActionTypes from "./constants";

export const loadEvents = () => dispatch => dispatch({
  [CALL_API]: {
    endpoint: "http://www.mocky.io/v2/59f08692310000b4130e9f71",
    method: "GET",
    types: [
	    ActionTypes.LOAD_EVENTS_REQUEST,
	    ActionTypes.LOAD_EVENTS_SUCCESS,
	    ActionTypes.LOAD_EVENTS_FAILURE
    ]
  }
})

export const toggleSelection = (id) => dispatch => dispatch({
	type: ActionTypes.TOGGLE_SELECTION,
	data: { id }
})

export const removeSelection = (id) => dispatch => dispatch({
	type: ActionTypes.REMOVE_SELECTION,
	data: { id }
})