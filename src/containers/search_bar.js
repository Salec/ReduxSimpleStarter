import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators } from 'redux';
import {fetchWeather} from '../actions/index'


class Searchar extends Component{
	constructor(props){
		super(props);

		this.state= {term: ''};

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}
	render(){
		return(<form onSubmit={this.onFormSubmit} className='input-group'>
				<input 
					placeholder='Get a five-day forecast in your favourite cities'
					className='form-control'
					vale={this.state.term}
					onChange={this.onInputChange}
				/>
				<span className='input-group-btn'>
					<button type='submit' className='btn btn-secondary'>Submit</button>
				</span>
 			</form>);
	}
	onInputChange (event){
		this.setState({term:event.target.value});
	}
	onFormSubmit(event){
		event.preventDefault();

		//We need to go and fetch weather data
		this.props.fetchWeather(this.state.term);
		this.setState({term : ''});
	}
}

function mapsDispatchToProps(dispatch) {
	return bindActionCreators({fetchWeather},dispatch);

}

export default connect(null, mapsDispatchToProps)(Searchar);