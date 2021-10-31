import React, { Component } from 'react'
import { FormInput } from '../form-input/form-input.component';
import { CustomButton } from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import './sign-in.styles.scss'

export default class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' })
        } catch (error) {
            console.error(error)
        }
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
