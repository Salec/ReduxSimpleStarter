import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {createPost} from '../actions/index';

class PostNew extends Component {
    render() {
        const {fields:{title, categories, content}, handleSubmit} = this.props;
        //const title = this.props.fields.title;

        return (
               //handleSubmit is a property of props                              //actionCreator
            <form onSubmit={handleSubmit(this.props.createPost)}>
                <h3>Create a New Post</h3>
                <div className="form-group">
                    <label>Title</label>
                                                                //all the ppts and methods of title are passed
                    <input type="text" className="form-control" {...title}/>
                    <div className="text-help">
                        {title.touched ? title.error : ''}
                    </div>
                </div>
                <div className="form-group">
                    <label>Categories</label>
                    <input type="text" className="form-control" {...categories}/>
                </div>
                <div className="form-group">
                    <label>Content</label>
                    <textarea type="text" className="form-control" {...content}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        );
    }
}
function validate(values) {
    const errors = {};

    if(!values.title){
        errors.title = 'Enter a username';
    }

    return errors;

}

//connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
//reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
//TODO review this
export default reduxForm({
    form: 'PostNewForm',
    fields: ['title', 'categories', 'content'],
    validate
},null,{ createPost})(PostNew);