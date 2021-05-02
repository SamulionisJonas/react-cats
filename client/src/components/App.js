import React, { useEffect } from 'react';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { fetchCatBreeds, search } from '../slices/catSlice';
// Components
import { SearchBar } from '../components/SearchBar/SearchBar';
import { Filter } from '../components/Filter/Filter';
import { List } from '../components/List/List';
import { ListItem } from '../components/List/ListItem';
import { Pagination } from '../components/Pagination/Pagination';

export const App = () => {
	const dispatch = useDispatch();
	const { loading, filtered } = useSelector((state) => state.catBreeds);
	const [items, setItems] = React.useState();

	useEffect(() => {
		dispatch(fetchCatBreeds());
	}, [dispatch]);

	// Callback for item set
	const onPageChange = (itemsOfPage) => {
		setItems(itemsOfPage);
	};

	return (
		<div className='wrapper'>
			<SearchBar onChange={search} />
			{loading === 'pending' ? (
				<div className='gif'>
					<iframe
						src='https://giphy.com/embed/mlvseq9yvZhba'
						width='480'
						height='480'
						frameBorder='0'
						className='giphy-embed'
						allowFullScreen></iframe>
				</div>
			) : filtered.length > 0 ? (
				<List>
					<Filter />

					{items && items.map((item, i) => <ListItem key={i} item={item} />)}
					<Pagination
						items={filtered}
						onChangePage={onPageChange}
						initialPage={1}
						pageSize={5}
					/>
				</List>
			) : (
				<div className='gif'>
					<iframe
						src='https://giphy.com/embed/bm02BE6DQ4Oag8GXep'
						width='480'
						height='400'
						frameBorder='0'
						className='giphy-embed'
						allowFullScreen></iframe>
				</div>
			)}
		</div>
	);
};
