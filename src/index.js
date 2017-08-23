import React from 'react';
import ReactDOM from 'react-dom';

//Create a new component. This 	component chould produce HTML
const App = () =>{
	return <div>Hello!</div>;
}


// Take this HMTL generated and put it on the page

ReactDOM.render(<App/>,document.querySelector('.container')) ;