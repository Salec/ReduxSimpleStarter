export function selectBook(book){
	// select book is an action creator
	//It need to return an action, an object with a type ppt

	return({
		type: 'BOOK_SELECTED',
		payload: book
	});

}