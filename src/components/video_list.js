import React from 'react';

const video_list= (props) =>{
	return(
		<ul className='col-md-4 list-group'>
		{props.videos.length}		
		</ul>
		);
};

export default video_list;