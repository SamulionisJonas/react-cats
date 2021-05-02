import React from 'react';
import 'regenerator-runtime/runtime';
import '@testing-library/jest-dom/extend-expect';
import { store } from '../../store';
import { Provider } from 'react-redux';
import { SearchBar } from './SearchBar';
import { search } from '../../slices/catSlice';
import { render, fireEvent, cleanup } from '@testing-library/react';

afterEach(cleanup);

describe('<SearchBar/> component', () => {
	it('text on input placeholder changes while slecting select option', () => {
		const { getByText, getByPlaceholderText } = render(
			<Provider store={store}>
				<SearchBar onChange={search} />
			</Provider>
		);

		fireEvent.click(getByText(/by origin/i));
		let input = getByPlaceholderText(/Search by origin/i);

		expect(input).toBeInTheDocument();
	});
});
