import {createStore, Store, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {default as rootReducer} from './root.reducer';
import {StoreState} from './root.types';

const reduxDevToolsCompose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const composeEnhancer = reduxDevToolsCompose || compose;

export const configureStore = (): Store<StoreState> => createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk))
);