import React, { Component } from 'react'
import { FormInput } from '../form-input/form-input.component';
import { CustomButton } from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import './sign-in.styles.scss'

export default class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: '' })
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value})
    }

    render() {
        return (
            <div className='sign-in' onSubmit={this.handleSubmit} >
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form>
                    <FormInput label='Email' name='email' type='email' handleChange={this.handleChange} value={this.state.email} required />
                    
                    <FormInput label='Password' name='password' type='password' handleChange={this.handleChange} value={this.state.password} />
                    <div className="buttons">
                    <CustomButton type='submit' >Sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
