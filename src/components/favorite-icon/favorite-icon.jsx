import React from 'react';
import {ReactComponent as HearBlue} from '../../assets/heart_#007bff.svg';
import {ReactComponent as HearRed} from '../../assets/heart.svg';
import {ReactComponent as HearRedPlus} from '../../assets/heart_red.svg';
import {ReactComponent as HearBluePlus} from '../../assets/heart_blue.svg';
import {Link} from 'react-router-dom';
import {selectfavorites,selectfavoriteIsAdd} from '../../redux/favorite/favorite.selector';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import './favorite-icon.styles.scss';

const FavoriteIcon = ({favoriteItems, isAdd}) => {
    let isChange = isAdd;
    if (favoriteItems.length % 2 === 0){
        isChange = false;
    }else{
        isChange = true;
    }
  
    const blue = isChange ? <HearBlue className='heart-icon'/> : <HearBluePlus className='heart-icon'/>;

    const red = isChange ? <HearRed className='heart-icon'/> : <HearRedPlus className='heart-icon'/>;

    return(

    <div className='favorite-icon higher-z-index'>
    <Link to='/favorite'>
        {isAdd ? red : blue}
    </Link>
        
    </div>
    )
}

const mapStateToProps = createStructuredSelector({
    favoriteItems: selectfavorites,
    isAdd: selectfavoriteIsAdd
    
});

export default connect(mapStateToProps)(FavoriteIcon);