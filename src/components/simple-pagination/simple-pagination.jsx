import React from 'react';
import {Pagination, PageItem} from 'react-bootstrap';
const SimplePagination = ({animalsPerPage, totalAnimals, paginate, currentPage}) =>{
    
    const pageNumbers = [];
    for (let i=1; i <= Math.ceil(totalAnimals/animalsPerPage); i++){
        currentPage === i ? pageNumbers.push(<PageItem active key={i} href='#' onClick={()=>paginate(i)}>{i}</PageItem>) :
        pageNumbers.push(<PageItem key={i} href='#' onClick={()=>paginate(i)}>{i} 
        </PageItem>)
    }
    return(
        <div className='d-flex justify-content-center mt-3'>
        <Pagination>
           {pageNumbers}
        </Pagination>
        </div>
        
    )

} 

export default SimplePagination;
