import React, { Component } from 'react'
import styles from './styles.module.css'
import AuthApiServiceObject from '../../services/auth-api-service';
import TokenServiceObject from '../../services/token-service';

export default class SignUpForm extends Component {

    static defaultProps = {
        onRegistrationSuccess: () => {}
    }

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoading: false
        }
    }

    handleSignUpAuth = (e) => {
        e.preventDefault();

        let {user_name, password} = e.target;

        this.setState({
            error: null,
            isLoading: true
        })

        AuthApiServiceObject.registerUser({
            user_name: user_name.value,
            password: password.value  
        })
            .then(res => {
                user_name.value = '';
                password.value = '';
                this.props.onRegistrationSuccess();
                this.setState({
                    isLoading: false
                })
            })
            .catch(res => {
                this.setState({
                    error: res.error,
                    isLoading: false
                })
        })
    };

    render() {

        const { error } = this.state;

        return (
            <div role="presentation" className={styles.signUpHolder}>
                <form onSubmit={e => this.handleSignUpAuth(e)}className={styles.signUpForm} id="signUpForm" name="signUpForm">

                    <legend className={styles.signUpLegend}>Sign Up</legend>

                    <div role='alert'>
                    {error && <p className={styles.error}>{error}</p>}
                    </div>

                    <label for="user_name">Username:</label>
                    <input type="text" name="user_name" className={styles.signUpUsername} id="signUpUsername" />

                    <br/>

                    <label for="password">Password:</label>
                    <input type="password" name="password" className={styles.signUpPassword} id="signUpPassword" />

                    <br />

                    <button type="submit" for="signUpForm" className={styles.signUpButton}>Sign Up</button>

                </form>
            </div>
        )
    }
}
