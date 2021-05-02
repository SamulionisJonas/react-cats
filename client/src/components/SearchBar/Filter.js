import React from 'react';

export const Filter = ({ onChange, value }) => {
	return (
		<div className='search-bar-filter'>
			<label>
				by Name
				<input
					id='name'
					value='name'
					name='sortyBy'
					type='radio'
					checked={value === 'name'}
					onChange={(e) => onChange(e.target.value)}
				/>
			</label>
			<label>
				by Origin
				<input
					id='origin'
					value='origin'
					name='sortyBy'
					type='radio'
					onChange={(e) => onChange(e.target.value)}
				/>
			</label>
			<label>
				by Temperament
				<input
					id='temperament'
					value='temperament'
					name='sortyBy'
					type='radio'
					onChange={(e) => onChange(e.target.value)}
				/>
			</label>
		</div>
	);
};
