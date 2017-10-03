import axios from 'axios';

export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_ONE = 'FETCH_ONE';
export const DELETE_POST = 'DELETE_POST';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=i4jfk4k69gl4foemqllf';

export function fetchPost(){
	const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

	return({
		type: FETCH_POST,
		payload: request
	});
}

export function createPost(props) {
	const request = axios.post(`${ROOT_URL}/posts${API_KEY}`,props);

	return{
		type: CREATE_POST,
		payload: request
	};
}

export function fetchOne(id) {
	const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
	return{
		type: FETCH_ONE,
		payload: request
	}
}

export function deletePost(id) {
	const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);
	return{
		type: DELETE_POST,
		payload: request
	}

}