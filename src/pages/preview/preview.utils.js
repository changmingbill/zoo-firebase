import React from 'react';
import CollectionItem from '../../components/collection-item/collection-item.component';
import Flip from 'react-reveal/Flip';

const collectionItemSpread = (animals, area) => animals.filter((item, idx) =>  item.location === area).filter((item, idx) =>  idx < 5).map((item)=>{
    return <Flip right key={item.id}><CollectionItem  item={item}/></Flip>
});

export default collectionItemSpread;