import React from 'react';
import ReactDOM from 'react-dom';
// Styles
import './styles/styles.scss';
// Redux
import { Provider } from 'react-redux';
import { store } from './store';
// Components
import { App } from './components/App';

// Opt-in to Webpack hot module replacement
if (module.hot) module.hot.accept();

/* eslint-disable no-undef */
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
);
