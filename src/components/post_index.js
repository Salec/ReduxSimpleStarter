import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPost} from '../actions/index';
import {Link} from 'react-router';

class PostIndex extends Component{
	render(){
		return (<div>
				<div className='text-xs-right'>
					<Link to='/posts/new' className='btn btn-primary'>
					Add a Post
					</Link>
				</div>

				List of posts
			</div>
			);
	};

	componentWillMount(){
		this.props.fetchPost();
	};
};

export default connect(null, {fetchPost})(PostIndex);