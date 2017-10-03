import {FETCH_POST, FETCH_ONE} from '../actions/index';
const INITIAL_STATE ={all:[], post: null};


export default function(state = INITIAL_STATE, action){
	switch(action.type){
		case FETCH_POST:
			//get the old state and append the data fetch 
			return { ...state , all: action.payload.data};
		case FETCH_ONE:
			return {...state, post:action.payload.data};
		default:
			return state;
	}
}