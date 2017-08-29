import React,{Component} from 'react';
import {connect} from 'react-redux';


class BookList extends Component{
    renderList(){
        return this.props.books.map(book =>{
            return(
                <li key={book.title} className="=list-group-item">{book.title}</li>
            )
        })
    }

    render(){
        return(
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}


/**
 * Functions that enables getting state from redux
 * @param state
 * @returns {{books: *}}
 */
function mapsStateToProps(state) {
    return{
        books: state.books
    };
}

export default connect(mapsStateToProps)(BookList);