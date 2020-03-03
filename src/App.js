import React, {Fragment} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Page from './pages/page/page.component';
import SingInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import AnimalPage from './pages/animal-page/animal-page.component';
import PreviewPage from './pages/preview/preview.component';
import AreaPage from './pages/area-page/area-page.component';
import SearchPage from './pages/search-page/search-page.component';
import ContactPage from './pages/contact/contact.component';
import FavoritePage from './pages/favorite-page/favorite-page.component';
import ParticleConponent from './components/particle-conponent/particle.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {selectCurrentUser} from './redux/user/user.selectors';
import {selectSearch,selectAnimalArray} from './redux/animal/animal.selector';
import {createStructuredSelector} from 'reselect';
import {setCurrentUser} from './redux/user/user.action';
import {fetchAnimalsStartAsync} from './redux/animal/animal.action';
import {connect} from 'react-redux';


import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component{
  
  unsubscribeFromAuth = null;
  componentDidMount(){
    
    const {fetchAnimalsStartAsync} = this.props;
    fetchAnimalsStartAsync();
    const {setCurrentUser} = this.props;
    //onAuthStateChanged is a listerner
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth){
        
        const userRef = createUserProfileDocument(userAuth);
        (await userRef).onSnapshot(snapshot =>{
          setCurrentUser({
              id:snapshot.id,
              ...snapshot.data()
          });
        })
      }else{
        setCurrentUser(userAuth);//pass null to setCurrentUser payload
        // addCollectionAndDocuments('animals', selectAnimalArray.map(({title, name_Ch,Pic01_URL,Pic02_URL, Pic03_URL, Pic04_URL, name_En, name_Latin, Pic01_ALT, behavior, phylum, classis, order, family, feature, diet, habitat, distribution,crisis,interpretation,location_Ch,location}) => ({title, name_Ch,Pic01_URL,Pic02_URL, Pic03_URL, Pic04_URL, name_En, name_Latin, Pic01_ALT, behavior, phylum, classis, order, family, feature, diet, habitat, distribution,crisis,interpretation,location_Ch,location})));//add items onto firestore
      }
    });
    // selectAnimalArray.forEach((item,idx)=>console.log(idx,item.id,item.location_Ch));
   
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render()
  {
    return (
      <Fragment>
      <ParticleConponent/>
      <Header />
       <div className='d-flex flex-column container-fluid app-container'>
      
        <Switch>
          <Route exact path='/' render ={() => (<Redirect to='/page/1'/>)}/>
          <Route path='/page' component={Page}/>
          <Route path={`/animal/:animalId`} component={AnimalPage}/>
          <Route exact path='/preview' component={PreviewPage}/>
          <Route exact path='/contact' component={ContactPage}/>
          <Route exact path='/favorite' component={FavoritePage}/>
          <Route exact path='/search' render = {
            () => this.props.searchField === "" ? (<Redirect to='/page/1'/>) : (<SearchPage/>)
          }/>
          <Route path='/area/:areaId' component={AreaPage}/>
          <Route exact path='/signin' render = {
            () => this.props.currentUser ? (<Redirect to='/page/1'/>) : (<SingInAndSignUpPage/>)
          }/>
        </Switch>
      </div>
     
        
        
      </Fragment>
     );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  searchField: selectSearch,
  selectAnimalArray:selectAnimalArray,
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),//user means payload content pass to reducer
  fetchAnimalsStartAsync:() => dispatch(fetchAnimalsStartAsync())
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
