import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { sortBy } from '../../slices/catSlice';

export const Filter = () => {
	const [state, setState] = React.useState('intelligence');
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(sortBy({ type: state }));
	}, [state]);

	return (
		<div className='filter'>
			<label>
				Sort by
				<select onChange={(e) => setState(e.target.value)}>
					<option value='intelligence'>intelligence</option>
					<option value='grooming'>grooming</option>
					<option value='energy_level'>energy level</option>
					<option value='dog_friendly'>dog friendly</option>
					<option value='child_friendly'>child friendly</option>
				</select>
			</label>
		</div>
	);
};
