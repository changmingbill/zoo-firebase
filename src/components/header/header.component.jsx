import React from 'react';
import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {selectCurrentUser} from '../../redux/user/user.selectors';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {createStructuredSelector} from 'reselect';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import {HeaderContainer} from './header.styles';
import {OptionLink} from './header.styles';
import FavoriteIcon from '../favorite-icon/favorite-icon';

const Header = ({currentUser}) => {
    return(
        <HeaderContainer className='navbar navbar-default fixed-top'>
        <Navbar.Brand href="/" className='higher-z-index'>
                    <Logo className='logo'/>
        </Navbar.Brand>
        <Navbar collapseOnSelect expand="sm" variant="light" >
                
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav.Link className='higher-z-index' href='/preview'>PREVIEW</Nav.Link>
                            <Nav.Link className='higher-z-index' href='/contact'>CONTACT</Nav.Link>
                            {
                                currentUser ? <OptionLink as='div' onClick={()=>auth.signOut()}>SIGN OUT</OptionLink> :
                                <Nav.Link className='higher-z-index' href='/signin'>SIGN IN</Nav.Link>
                            }
                            <FavoriteIcon/>
                    </Navbar.Collapse>
                   
                </Navbar>
        
        
        </HeaderContainer>
                
    )

}

// const mapStateToProps = (state) => ({
//     currentUser:selectCurrentUser(state),//currentUser: state.user.currentUser//state means rootReducer; user means user.reducer
//     hidden:selectCartHidden(state)//{hidden} means cartReducer.hidden
// })
const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser
    
})

export default connect(mapStateToProps)(Header);
//let currentUser information from user.reducer pass into header component