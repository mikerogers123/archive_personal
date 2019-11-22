import React from 'react';
import ReactDOM from 'react-dom';
import './styles/typography.css';
import './styles/buttons.css';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from './redux/store-setup';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';


const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        <link href="/your-path-to-fontawesome/css/fontawesome.css" rel="stylesheet"></link>
        <link href="/your-path-to-fontawesome/css/brands.css" rel="stylesheet"></link>
        <link href="/your-path-to-fontawesome/css/solid.css" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Lato:100|Major+Mono+Display&display=swap" rel="stylesheet"></link>
        <App />
    </Provider>,
    document.getElementById('root')
);
