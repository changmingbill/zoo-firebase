import React from 'react';
import {Jumbotron,Figure,ListGroup,Container,Row,Col} from 'react-bootstrap';

const ContactPage = () => (
    <Jumbotron className=''>
    <Container>
    <Row>
    <Col md={3}>
        <Figure className='d-flex flex-column justify-content-center pt-4'>
            <Figure.Image
            width={171}
            height={180}
            alt="171x180"
            src={require('../../assets/changming.jpg')}
            />
            <Figure.Caption></Figure.Caption>
        </Figure>
    </Col>
    <Col md={9}>
        <ListGroup style={{color:'white',fontSize:'1.3rem'}}>
            <ListGroup.Item>Location: Taipei</ListGroup.Item>
            <ListGroup.Item>Name: Cliff Chang</ListGroup.Item>
            <ListGroup.Item>Chinese Name: 張健民</ListGroup.Item>
            <ListGroup.Item>Email Address: changmingbill@gmail.com</ListGroup.Item>
            <ListGroup.Item>My Website:</ListGroup.Item>
        </ListGroup>
    </Col>
    
    </Row>
    
    
    </Container>
    
       
    </Jumbotron>
)

export default ContactPage;