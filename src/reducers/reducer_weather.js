import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_WEATHER:
			//return state.concat([action.payload.data]); // adds on to the current state array, creating a new array - never mutate the state!
			// return a new instance of the state!
			return [ action.payload.data, ... state ];  
	}
	return state;
}