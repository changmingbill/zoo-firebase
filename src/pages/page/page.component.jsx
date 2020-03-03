import React from 'react';
import SubPage from '../../components/sub-page/sub-page.component';
import {Route, Redirect} from 'react-router-dom';
import SidePage from '../side-page/side-page.component';
import {Container, Row, Col} from 'react-bootstrap';

import './page.styles.scss';

const Page = ({match}) => {
    return(
    <div className=''>
    
    <Container fluid>
        <Row>
          <Col lg={9} className='pl-0'>
            <Route exact path={`${match.path}`} render ={() => (<Redirect to='/page/1'/>)}/>
            <Route exact path={`${match.path}/:pageId`} component={SubPage}/>
          </Col>
          <Col lg={3} className='px-0 side-bar-col'>
            <SidePage/>
          </Col>
        </Row>
          
        </Container>
        
    </div>
    )
}


export default Page;