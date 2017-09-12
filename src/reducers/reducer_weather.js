import {FETCH_WEATHER} from '../actions/index';

export default function (state = [], action) {
	switch(action.type){
		case FETCH_WEATHER:
			//ALWAYS RETURN A NEW INSTANCE OF STATE
			return [action.payload.data, ...state];
		break;
	}
    return state;
}