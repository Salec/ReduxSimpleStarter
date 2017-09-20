import { combineReducers } from 'redux';
import PostReducer from './reducer_posts';	
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
    posts : PostReducer,
    // make sure this ppt is always called form
    form: formReducer
});

export default rootReducer;
