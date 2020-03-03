import {FavoriteActionType} from './favorite.type';

export const addItem = item => ({
    type: FavoriteActionType.ADD_ITEM,
    payload:item
});

export const removeItem = item => ({
    type: FavoriteActionType.REMOVE_ITEM,
    payload:item
});


export const toggleHeart = item => ({
    type: FavoriteActionType.TOGGLE_HEART_COLOR
    
});

