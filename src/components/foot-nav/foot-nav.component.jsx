import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import PageItem from 'react-bootstrap/PageItem';
import './foot-nav.styles.scss';

const FootNav = ({length, current,collectionsPerPage}) => {
    const pages = Math.ceil(length/collectionsPerPage);
    const items = [];
    for(let i=1; i <= pages; i++){
        // if (i===1) {
        //     current ? items.push(<PageItem key={i} href={`/`}>{i}</PageItem>) :
        //     items.push(<PageItem active key={i} href={`/`}>{i}</PageItem>)
        // }
            if (current === i){
                items.push(<PageItem active key={i} href={`/page/${i}`}>{i}</PageItem>)
            }else{
                items.push(<PageItem  key={i} href={`/page/${i}`}>{i}</PageItem>)
            }
        
    }

   return (
    <div className='d-flex justify-content-center mt-5'>
        <Pagination >
            <Pagination.First href={`/`}>First</Pagination.First>
            <Pagination.Prev href={current === 1 || current === undefined ? '#' : `/page/${Number(current)-1}` }/>
            {current > 9  ? items.filter((item, idx) => idx < current+5 && idx > current -6) : items.filter((item, idx) => idx < 10 )}
            <Pagination.Next href={current ? (current === pages ? '#' : `/page/${Number(current)+1}`)  : `/page/2`}/>
            <Pagination.Last href={`/page/${pages}`}>Last</Pagination.Last>
        </Pagination>
    </div>
    
   )
}

export default FootNav;