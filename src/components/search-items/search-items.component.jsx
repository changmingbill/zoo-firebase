import React ,{useState} from 'react';
import {Flip} from 'react-reveal';
import CollectionItem from '../collection-item/collection-item.component';
import SimplePagination from "../simple-pagination/simple-pagination";
import {Container, Row, Col} from 'react-bootstrap';
    
const SearchItems = ({collections}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [animalsPerPage] = useState(12);
    const indexOfLastAnimal = currentPage * animalsPerPage;
    const indexOfFirstAnimal = indexOfLastAnimal - animalsPerPage;
    const currentAnimals = collections.slice(indexOfFirstAnimal,indexOfLastAnimal);
    const paginate = (number) =>{
        
        setCurrentPage(number);
    };

    const collectionItemSpread = currentAnimals.map((item)=>{
        return <Col lg={3} md={4} key={item.id} className='mb-3'><Flip><CollectionItem item={item}/></Flip></Col>
    });
    
    if (currentAnimals.length === 0 && collections.length !== 0){
       
        setCurrentPage(currentPage-1);
    }
    return(
        <Container fluid className='mx-0 p-0'>
        <Row>
        {collections.length ? collectionItemSpread : <h2>SORRY! NO DATA</h2>}
        </Row>
        <Row className='d-flux justify-content-center'>
           {collections.length <= animalsPerPage ? null : <SimplePagination animalsPerPage={animalsPerPage} totalAnimals={collections.length} paginate={paginate} currentPage={currentPage}/>}
        </Row>
        </Container> 
    )
}

export default SearchItems;