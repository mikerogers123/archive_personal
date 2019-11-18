import React from 'react';
import ReactDOM from 'react-dom';
import './styles/typography.css';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from './redux/store-setup';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';


const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Poiret+One&display=swap" rel="stylesheet"></link>
        <App />
    </Provider>,
    document.getElementById('root')
);
