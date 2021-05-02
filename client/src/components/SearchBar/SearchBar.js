import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useDebounce } from '../../utils/useDebounce';
import { Filter } from './Filter';

export const SearchBar = ({ onChange }) => {
	// Input serchTerm
	const [searchTerm, setSearchTerm] = React.useState('');
	// Filter state
	const [state, setState] = React.useState('name');
	const dispatch = useDispatch();

	const debouncedValue = useDebounce(searchTerm, 300);

	useEffect(() => {
		dispatch(
			onChange({
				value: searchTerm,
				sortBy: state,
			})
		);
	}, [debouncedValue]);

	return (
		<>
			<div className='searchbar'>
				<div className='searchbar_input'>
					<input
						onChange={(e) => setSearchTerm(e.target.value)}
						placeholder={`Search by ${state}`}
					/>
				</div>
			</div>
			<Filter value={state} onChange={setState} />
		</>
	);
};
