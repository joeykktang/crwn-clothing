import React from "react";
import './sign-in.styles.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email: '', password: ''});
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({ [name]: value})
    }

    render() {
        return(
            <div className="sign-in">
                <h2>I already has an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' handleChange={this.handleChange} label="Email" type="email" value={this.state.email} required/>
                    <FormInput name='password' handleChange={this.handleChange} label="Password" type="password" value={this.state.password} required/>
                    <div className="buttons">
                        <CustomButton type="submit">Sign in</CustomButton>&nbsp;
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn="true">Sign in with Google</CustomButton>   
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;