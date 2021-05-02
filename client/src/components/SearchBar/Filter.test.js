import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Filter } from './Filter';

afterEach(cleanup);

describe('<Filter/> component', () => {
	it('should render three input fields', () => {
        const { getByText } = render(<Filter />);
        expect(getByText(/by name/i));
        expect(getByText(/by origin/i));
        expect(getByText(/by Temperament/i));
    });
});
