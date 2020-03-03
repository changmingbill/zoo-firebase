import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle, auth} from '../../firebase/firebase.utils.js';
import './sign-in.styles.scss';
class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = async (event) =>{
        event.preventDefault();
        const {email, password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email, password);
        }catch(error){
            console.log(error);
        }
        this.setState({email:'',password:''});
    }

    handleChange = (event) =>{
        const {name, value} = event.target;
        this.setState({
            [name] : value
        })
    }
    

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have a account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        onChange={this.handleChange}
                        name='email'
                        type='email'
                        value={this.state.email}
                        label='email'
                        required
                    />
                    <FormInput 
                        onChange={this.handleChange}
                        name='password'
                        type='password'
                        value={this.state.password}
                        label='password'
                        required
                    />
                    <div className='buttons'>
                        <CustomButton type="submit" value="Submit Form" khaki>Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                    
                </form>
                
            </div>
        )
    }
}

export default SignIn;