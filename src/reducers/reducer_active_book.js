//state argument is not aplication state, just 
//the state that the reducer is reponseble for

export default function(state = null, action){
	switch(action.type){
		case 'BOOK_SELECTED':
			return action.payload;
	}

	return state;

}