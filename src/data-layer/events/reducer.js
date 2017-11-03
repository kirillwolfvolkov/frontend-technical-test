import { normalize } from "normalizr";
import * as ActionTypes from "./constants";
import { eventsSchema } from "./schema";

const initialState = {
	selected: [],
	data: []
}

export default function events(state = initialState, action) {
	const { type, payload, data } = action;
  switch (type) {
    case ActionTypes.LOAD_EVENTS_SUCCESS:
      return {
        ...state,
        data: normalize(payload, eventsSchema)
      };

	  case ActionTypes.TOGGLE_SELECTION:
      return {
		    ...state,
		    selected: state.selected.includes(data.id) ?
			    state.selected.filter(id => id !== data.id)
			    : [ ...state.selected, data.id ]
      }

	  case ActionTypes.REMOVE_SELECTION:
	  	return {
			  ...state,
			  selected: state.selected.filter(id => id !== data.id)
		  };

    default:
      return state;
  }
}
