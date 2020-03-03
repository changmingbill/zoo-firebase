import React from 'react';
import {addItem,removeItem} from '../../redux/favorite/favorite.action';
import {connect} from 'react-redux';
const AddAndRemoveIcon = ({item, isSelect,removeItem,addItem}) => (
    <span onClick={() => isSelect ?  removeItem(item) : addItem(item)} style={isSelect ? {color: '#FE929F'} : {color: '#f8f9fa'}}>&#10084;</span>
);

const mapDispatchToProps = dispatch =>({
    addItem: (item) => dispatch(addItem(item)),
    removeItem: (item) => dispatch(removeItem(item))
});

export default connect(null,mapDispatchToProps)(AddAndRemoveIcon);