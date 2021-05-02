import React from 'react';
import placholder from '../../assets/placeholder.jpeg';

export const ListItem = ({ item }) => (
	<div className='list_listItem'>
		<div className='image'>
			<img src={(item.image && item.image.url) || placholder} alt={item.alt_names} />
		</div>
		<div>
			<h2>{item.name}</h2>
		</div>
	</div>
);
