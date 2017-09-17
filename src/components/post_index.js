import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPost} from '../actions/index';


class PostIndex extends Component{
	render(){
		return (<div>List of posts</div>
			);
	}

	componentWillMount(){
		this.props.fetchPost();
	};
};

export default connect(null, {fetchPost})(PostIndex);