import React, { useEffect } from 'react';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { fetchCatBreeds, search } from '../slices/catSlice';
// Components
import { SearchBar } from '../components/SearchBar/SearchBar';

export const App = () => {
	const dispatch = useDispatch();
	const { loading, filtered } = useSelector((state) => state.catBreeds);

	useEffect(() => {
		dispatch(fetchCatBreeds());
	}, [dispatch]);

	return (
		<div className='wrapper'>
			<SearchBar onChange={search} />
		</div>
	);
};
