import React ,{Fragment} from 'react';
import './sign-in-and-sign-up.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SingInAndSignUpPage = () => {
    return(
        <Fragment>
        
        <div className='sign-in-and-sign-up'>
        
            
            <div className='sign-in-container higher-z-index text-light'>
                
                <SignIn/>
                
            </div>
            <div className='sign-up-container higher-z-index text-light'>
                
                <SignUp/>
                
            </div>
            
            
           
        </div>
        </Fragment>
        
    )
}

export default SingInAndSignUpPage;