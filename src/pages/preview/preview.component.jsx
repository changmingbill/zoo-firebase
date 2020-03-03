import React from 'react';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import {selectAnimalArray} from '../../redux/animal/animal.selector';
import {Jumbotron} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import collectionItemSpread from './preview.utils';
import './preview.styles.scss';

const zoneArray = [{en:'African',ch:'非洲動物區'},{en:'TaiwanAnimals',ch:'臺灣動物區'},{en:'Birds',ch:'鳥園區'},{en:'TemperateZone',ch:'溫帶動物區'},{en:'Rainforest',ch:'熱帶雨林區'},{en:'Children',ch:'兒童動物區'},{en:'AmphibianReptile',ch:'兩棲爬蟲動物館'},{en:'InsectHouse',ch:'昆蟲館'},{en:'RainforestIndoorPavilion(FormosanPangolinPavilion)',ch:'熱帶雨林室內館(穿山甲館)'},{en:'Australia',ch:'澳洲動物區'},{en:'Desert',ch:'沙漠動物區'},{en:'Penguin',ch:'企鵝館'},{en:'Koala',ch:'無尾熊館'},{en:'Panda',ch:'新光特展館(大貓熊館)'}]

const PreviewPage = ({animals}) => {
    
    return(
        <div className='d-flex flex-column'>
            {zoneArray.map((item,idx) => 
                (
                    <Jumbotron key={idx} fluid className='bg-gradient-warning py-2 mb-0 pr-2 pl-3'>
                        <h3 className='mb-3 preview-title higher-z-index'>{item.ch}</h3>
                        <div className='colletion-item-container'>
                            {
                                collectionItemSpread(animals, item.en)
                            }
                        </div>
                        {collectionItemSpread(animals, item.en).length < 5 ? null : <div className='text-right preview-button'><Link style={{textDecoration:'none', color:'#9DCFF0'}} to={`/area/${item.en}`}><span>{'more'}</span></Link></div>}
                    </Jumbotron>
                  
                )
            )
            }  
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    animals: state => selectAnimalArray(state)
});
export default connect(mapStateToProps)(PreviewPage);