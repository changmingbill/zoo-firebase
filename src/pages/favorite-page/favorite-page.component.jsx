import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectfavorites} from '../../redux/favorite/favorite.selector';
import SearchItems from '../../components/search-items/search-items.component';

const FavoritePage = ({favorites}) => (
    <SearchItems collections={favorites}/>
)

const mapStateToProps = createStructuredSelector({
    favorites : selectfavorites
});

export default connect(mapStateToProps)(FavoritePage);