/**
 * Created by Fernando on 3/10/2017.
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchOne , deletePost} from '../actions/index'
import {Link} from 'react-router';

class PostShow extends Component{
    componentWillMount(){
        this.props.fetchOne(this.props.params.id);
    }
    onDeleteClick(){
        this.props.deletePost(this.props.params.id)
    }
    render(){
        const {post} = this.props;
        if (!post){
            return <div>Loading...</div>
        }
        return (
            <div>
                <Link to="/">Back</Link>
                <button className="btn btn-danger pull-xs-right" onClick={this.onDeleteClick.bind(this)}>
                    Delete Post
                </button>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>

            </div>
        );
    }
}
function mapStateToProps(state) {
    return {post: state.posts.post}

}
export default connect(mapStateToProps,{fetchOne, deletePost})(PostShow);