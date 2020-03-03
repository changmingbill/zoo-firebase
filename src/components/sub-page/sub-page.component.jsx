import React from 'react';
import CollectionItem from '../../components/collection-item/collection-item.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import FootNav from '../foot-nav/foot-nav.component';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import {selectAnimalArray, selectSearch,selectIsCollectionLoaded} from '../../redux/animal/animal.selector';
import {LightSpeed, Rotate, Zoom, Flip} from 'react-reveal';

import './sub-page.styles.scss';
const SubPage = ({animals, match}) => {

    const animalsPerPage = 16;
    const pageId = Number(match.params.pageId);
    const range = animalsPerPage*pageId;
    const start = animalsPerPage*(pageId-1);
    const collectionItemSpread = animals.filter((item, idx) => idx >= start && idx < range).map((item)=>{
        return <CollectionItem  key={item.id} item={item}/>
    });

    return(
    <div className='sub-page'>
        <div className='sub-page__item'>
        {pageId%2 === 0 ? 
            pageId%4 === 0 ? <Flip left> 
            {collectionItemSpread} 
            </Flip>
            : <Rotate top left> 
            {collectionItemSpread} 
            </Rotate>
            : pageId%3 === 0 ? <Zoom left> 
            {collectionItemSpread} 
            </Zoom>
            : <LightSpeed right> 
            {collectionItemSpread} 
            </LightSpeed>
        }
         
        </div>  
            <FootNav length={animals.length} current={Number(match.params.pageId)} collectionsPerPage={animalsPerPage}/>     
    </div>
    )
}

const mapStateToProps = createStructuredSelector({
    animals: selectAnimalArray,
    searchField: selectSearch,
    isLoading:selectIsCollectionLoaded
});



export default connect(mapStateToProps)(WithSpinner(SubPage));