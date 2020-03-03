import React from 'react';
import {withRouter} from 'react-router-dom';
import Tilt from 'react-tilt';
import Figure from 'react-bootstrap/Figure';
import './side-bar-item.styles.scss';

const SideBarItem = ({item, history}) => {
    const {name_En, Pic01_URL, name_Ch, feature} = item;
    return(
    <Figure style={{overflow:'hidden'}}>
    <Tilt options={{ scale:1, perspective:800}}>
        <Figure.Image
            className='side-bar-item__figure_image'
            width={500}
            height={500}
            alt={name_En}
            src={Pic01_URL}
            onClick={()=>{history.push(`/animal/${item.title}`)}}
        />
    </Tilt>
    
    <Figure.Caption className='text-light'>
       {name_Ch}{`(${name_En})`}{` ${feature}`}
    </Figure.Caption>
</Figure>
)}

export default withRouter(SideBarItem);