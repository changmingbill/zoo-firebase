import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';//actual local storage object on our window browser
import userReducer from './user/user.reducer';
import animalDataReducer from '../redux/animal/animal.reducer';
import favoriteReducer from '../redux/favorite/favorite.reducer';


const persistConfig = {
    key: 'primary',
    storage,
    whiteList: ['favorite'],//only cart need to persist
    blacklist: ['animal','searchField']
};



const rootReducer = combineReducers({
    user: userReducer,
    animal: animalDataReducer,
    
    favorite: favoriteReducer
});

//combineReducers return one giant object
export default persistReducer(persistConfig,rootReducer);
// export default rootReducer;

