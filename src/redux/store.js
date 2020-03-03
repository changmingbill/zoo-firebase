import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {persistStore} from 'redux-persist';
import persistReducer from './root-reducer';
import thunk from 'redux-thunk';

const middlewares = [thunk];
if (process.env.NODE_ENV === 'development'){
    middlewares.push(logger);
}
//applyMiddleware(...middlewares) can apply multiple middlewares or applyMiddleware(logger)
export const store = createStore(persistReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);
export default {store,persistor};
