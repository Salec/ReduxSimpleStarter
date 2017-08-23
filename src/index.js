import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';




//Create a new component. This 	component chould produce HTML
const App = () =>{
	return (
		<div>
			<SearchBar/>
		</div>);
}


// Take this HMTL generated and put it on the page

ReactDOM.render(<App/>,document.querySelector('.container')) ;

