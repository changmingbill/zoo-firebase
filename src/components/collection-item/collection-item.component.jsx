import React from 'react';
import './collection-item.styles.scss';
import Card from 'react-bootstrap/Card';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {addItem,removeItem} from '../../redux/favorite/favorite.action';
import {selectfavorites} from '../../redux/favorite/favorite.selector';

const CollectionItem = ({item, history, addItem,removeItem,favoriteItems}) => {
    const {name_En, Pic01_URL, name_Ch} = item;
    let isSelect = false;
    const existingItem = favoriteItems.find(favoriteItem => 
        favoriteItem.id === item.id
    );
     existingItem ? isSelect = true : isSelect = false;

    return(
        <div className='collection-item'>
        <span className='collection-item__heart' onClick={() => isSelect ?  removeItem(item) : addItem(item)} style={isSelect ? {color: '#FE929F'} : {color: '#f8f9fa'}}>&#10084;</span>
            

            <Card style={{ width: '100%',height: '100%'}} className='collection-item-card'>
            
            <Card.Img variant="top" className='collection-item__image' style={{backgroundImage:`url(${Pic01_URL})`}} onClick={()=>{history.push(`/animal/${item.title}`)}}/>
           
            <Card.Body className='pt-0 pb-0 collection-item__body' style={{ height: '18%'}}>
                <Card.Title className='collection-item__title'>{name_Ch}</Card.Title>
                <Card.Subtitle  className="mb-2 text-muted font-italic collection-item__title">{name_En}</Card.Subtitle>
            </Card.Body>
                
            </Card>
            
        </div>
    )
}

const mapDispatchToProps = dispatch =>({
    addItem: (item) => dispatch(addItem(item)),
    removeItem: (item) => dispatch(removeItem(item))
});

const mapStateToProps = createStructuredSelector({
    favoriteItems: selectfavorites
});



export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CollectionItem));

