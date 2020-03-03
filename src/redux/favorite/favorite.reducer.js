import {FavoriteActionType} from './favorite.type';

const INITIAL_STATE = {
    favoriteItems: [],
    isAdd: false
};

const favoriteReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case FavoriteActionType.ADD_ITEM:
            return {
                ...state,
                isAdd:true,
                favoriteItems: [...state.favoriteItems, {...action.payload}]
            }
        case FavoriteActionType.REMOVE_ITEM:
        return {
            ...state,
            isAdd:false,
            favoriteItems: state.favoriteItems.filter(item => item.id !== action.payload.id)
        }
        default:
            return state;
    }
};

export default favoriteReducer;