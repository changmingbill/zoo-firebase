import React from 'react';
import SideBarItem from '../../components/side-bar-item/side-bar-item.component';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectAnimalArray,selectSearch,selectIsCollectionLoaded} from '../../redux/animal/animal.selector';
import {Form,Accordion,Card,Button} from 'react-bootstrap';
import {setSearchfield} from '../../redux/animal/animal.action';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import './side-page.styles.scss';



class SidePage extends React.Component{
    getRandomInt = (max) => (Math.floor(Math.random() * Math.floor(max)));
    
    handleSubmit = event => {
        
        if (this.props.searchField === "") {
          event.preventDefault();
          event.stopPropagation();
        }else{
            this.props.history.push(`/search`);
        }
        
    };
    
    render(){
        
        const {animals, onSearchChange} = this.props;
    return(
        <div className='d-flex flex-column' >
        <Form noValidate validated={true} onSubmit={this.handleSubmit}>
        <Form.Group controlId="formBasicPassword" className='d-flex'>
        <Form.Control className="mr-sm-1" type="search" placeholder="Search"  aria-label="Search" name="animalSearch" onChange={onSearchChange} />
        <Button className="btn btn-outline-success" variant="light" type="submit">Search</Button>
        </Form.Group>
        </Form>
        <div className='d-flex flex-column justify-content-center'>
            <SideBarItem  item={animals[this.getRandomInt(360)]}/>
            <SideBarItem  item={animals[this.getRandomInt(360)]}/>
            <SideBarItem  item={animals[this.getRandomInt(360)]}/>
        </div>
        
        <Accordion defaultActiveKey="1">
        <Card>
            <Card.Header className='pl-1'>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    園區動物
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
                <Card.Body className='d-flex flex-column'>
                <Link to='/area/African'>{'非洲動物區'}</Link>
                <Link to='/area/TaiwanAnimals'>{'臺灣動物區'}</Link>
                <Link to='/area/Birds'>{'鳥園區'}</Link>
                <Link to='/area/TemperateZone'>溫帶動物區</Link>
                <Card.Link href='/area/Rainforest'>熱帶雨林區</Card.Link>
                <Card.Link href='/area/Children'>兒童動物區</Card.Link>
                <Card.Link href='/area/AmphibianReptile'>兩棲爬蟲動物館</Card.Link>
                <Card.Link href='/area/InsectHouse'>昆蟲館</Card.Link>
                <Card.Link href='/area/RainforestIndoorPavilion(FormosanPangolinPavilion)'>熱帶雨林室內館(穿山甲館)</Card.Link>
                <Card.Link href='/area/Australia'>澳洲動物區</Card.Link>
                <Card.Link href='/area/Desert'>沙漠動物區</Card.Link>
                </Card.Body>
            </Accordion.Collapse>
         </Card>
        </Accordion>
        </div>
    )

    }
    
}
const mapStateToProps = createStructuredSelector({
    animals: state=>selectAnimalArray(state),
    searchField: selectSearch,
    isLoading:selectIsCollectionLoaded
});

const mapDispatchToProps = disPatch => ({
    onSearchChange: (event) => disPatch(setSearchfield(event.target.value))
});
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(WithSpinner(SidePage)));