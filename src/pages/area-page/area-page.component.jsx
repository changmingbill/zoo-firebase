import React ,{useState} from 'react';
import CollectionItem from '../../components/collection-item/collection-item.component';
import SimplePagination from '../../components/simple-pagination/simple-pagination';
import {connect} from 'react-redux';
import {selectArea,selectIsCollectionLoaded} from '../../redux/animal/animal.selector';
import {Flip} from 'react-reveal';
import {Container, Row, Col} from 'react-bootstrap';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
const AreaPage = ({locations,isLoading}) => {
    console.log(isLoading);
    const [currentPage, setCurrentPage] = useState(1);
    const [animalsPerPage] = useState(8);
    const indexOfLastAnimal = currentPage * animalsPerPage;
    const indexOfFirstAnimal = indexOfLastAnimal - animalsPerPage;
    const currentAnimals = locations.slice(indexOfFirstAnimal,indexOfLastAnimal);
    const paginate = (number) =>{
        setCurrentPage(number);
    };
    let title = '';
    return(
        
        <Container fluid className='mx-0 p-0'>
        <h3 style={{color:'#9DCFF0'}} className='mb-3 ml-2'>{title}</h3>
        <Row>
        
        {currentAnimals.map((item)=>{
            title = item.location_Ch;
            return <Col  lg={3} md={4} key={item.id} className='mb-3'><Flip><CollectionItem item={item}/></Flip></Col>
        })}
          
        </Row>
        <Row className='d-flux justify-content-center'>
           { locations.length <= animalsPerPage ? null : <SimplePagination animalsPerPage={animalsPerPage} totalAnimals={locations.length} paginate={paginate} currentPage={currentPage}/>}
        </Row>
        </Container>  
        
        
    )
}

const mapStateToProps = (state, ownProps) => ({
    locations: selectArea(ownProps.match.params.areaId)(state),
    isLoading:selectIsCollectionLoaded(state)
});

export default connect(mapStateToProps)(WithSpinner(AreaPage));