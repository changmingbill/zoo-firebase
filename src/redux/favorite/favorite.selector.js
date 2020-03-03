import {createSelector} from 'reselect';

const favoriteSelector = state => state.favorite

export const selectfavorites = createSelector(
    [favoriteSelector],
    favorite => favorite.favoriteItems
);

export const selectfavoriteIsAdd = createSelector(
    [favoriteSelector],
    favorite => favorite.isAdd
);

