import React from 'react';
import {connect} from 'react-redux';
import {selectAnimal,selectIsCollectionLoaded} from '../../redux/animal/animal.selector';
import Carousel from 'react-bootstrap/Carousel';
import {Container, Row, Col, Jumbotron, ListGroup} from 'react-bootstrap';
import {Fade} from 'react-reveal';
import Tilt from 'react-tilt';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import './animal-page.styles.scss';
class AnimalPage extends React.Component{
    state = {
        url_1: "",
        url_2: "",
        url_3: "",
        url_4: "",
    }

    convertIndexToUrl = (idx) =>{
        switch(idx){
            case 0:
                return this.state.url_1;
            case 1:
                return this.state.url_2;
            case 2:
                return this.state.url_3;
            case 3:
                return this.state.url_4;
            default:
                return this.state.url_1;
        }
    }

    onError = (idx)  => { 
        switch(idx){
            case 0:
                this.setState({ 
                    url_1: this.props.collection.Pic01_URL
                }); 
                break;
            case 1:
                this.setState({ 
                    url_2: this.props.collection.Pic01_URL
                }); 
                break;
            case 2:
                this.setState({ 
                    url_3: this.props.collection.Pic01_URL
                });
                break; 
            case 3:
                this.setState({ 
                    url_4: this.props.collection.Pic01_URL
                }); 
                break;
            default:
                break;
        }
    };
    
    render(){
        console.log(this.props.isLoading);
        const {collection} = this.props;
        const {name_Ch,Pic01_URL,Pic02_URL, Pic03_URL, Pic04_URL, name_En, name_Latin, Pic01_ALT, behavior, phylum, classis, order, family, feature, diet, habitat, distribution,crisis,interpretation,location_Ch} = collection;
        
        const imageUrls =  [Pic01_URL, Pic02_URL, Pic03_URL, Pic04_URL];
        
        const carouselItemArray = imageUrls.filter(url => url !== "").map((url, idx) => {
            return (
            <Carousel.Item key={url}>
            <img
                className="d-block w-100"
                alt={Pic01_ALT}
                src={this.convertIndexToUrl(idx) === "" ? url : this.convertIndexToUrl(idx)}
                onError={()=>this.onError(idx)}
            />
            </Carousel.Item>)
         });


         const animalProps = [{key:'Feature',value:feature},{key:'Phylum',value:phylum},{key:'Class',value:classis},{key:'Order',value:order},{key:'Family',value:family},{key:'Interpretation',value:interpretation},{key:'Behavior',value:behavior},{key:'Diet',value:diet},{key:'Habitat',value:habitat},{key:'Distribution',value:distribution},{key:'Crisis',value:crisis},{key:'Location',value:location_Ch}];
       
        return(
            <Jumbotron className='bg-gradient-light text-dark'>
             <Container fluid="xl">
                <Row>
                    <Col xl={8} style={{zIndex:'5'}}>
                        <Fade right>
                        <Tilt options={{ max : 25, perspective:1200}}>
                         <Carousel>
                          {carouselItemArray}
                         </Carousel>
                        </Tilt>
                           
                        </Fade>   
                    </Col>
                    <Col xl={4} >

                        <Fade left>
                        
                        <ListGroup >
                            <ListGroup.Item className='font-weight-normal text-light'>
                                <h5>{name_Ch}</h5>
                            </ListGroup.Item>
                            <ListGroup.Item style={{fontSize:'0.9rem'}} className='font-italic text-light'>
                                {name_En}
                            </ListGroup.Item>
                            <ListGroup.Item style={{fontSize:'0.9rem'}} className='font-italic text-light'>
                                {`Nomenclature: ${name_Latin}`}
                            </ListGroup.Item>
                            {animalProps.map(prop => 
                                (prop.value === undefined ? null : prop.value !== "" ? <ListGroup.Item className='text-light' key={prop.key} style={{fontSize:'0.9rem'}}>{`${prop.key}: ${prop.value}` }</ListGroup.Item> : null)
                            )
                            }
                        </ListGroup>   
                        </Fade>
                    </Col>
                </Row>
                </Container>
                </Jumbotron>
            )

    }
    
}
const mapStateToProps = (state, ownProps) => ({
    collection: selectAnimal(ownProps.match.params.animalId)(state),
    isLoading:selectIsCollectionLoaded(state)
});

//style={{backgroundColor:'rgba(0, 0, 0, 0.5)'}}

export default connect(mapStateToProps)(WithSpinner(AnimalPage));