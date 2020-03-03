import React from 'react';
import CollectionItem from '../../components/collection-item/collection-item.component';
import FootNav from '../../components/foot-nav/foot-nav.component';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import {selectAnimalArray} from '../../redux/animal/animal.selector';
import scrollreveal from 'scrollreveal';
import './homepage.styles.scss';

class HomePage extends React.Component{
    componentDidMount = () => {
        const config = {
            delay    : 200,
            distance : '90px',
            easing   : 'ease-in-out',
            rotate   : { z: 10 },
            scale    : 1.1
        }
    
        scrollreveal().reveal(this.refs.box1, config);
      }

    render(){
        const {animals} = this.props;
    return(
        <div className='homepage'>
        <div className='homepage'>
        <div className='homepage__item'  ref='box1'>
                {animals.filter((item, idx) => idx < 30).map((item)=>{
                        return <CollectionItem  key={item.id} item={item}/>
                })}
        </div>  
        <FootNav length={animals.length}/>
    </div>
        </div>
    )}
}



const mapStateToProps = createStructuredSelector({
    animals: state => selectAnimalArray(state)
});

export default connect(mapStateToProps)(HomePage);

