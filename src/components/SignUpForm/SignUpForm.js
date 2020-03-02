import React, { Component } from 'react'
import styles from './styles.module.css'
import GamesContext from '../../contexts/GamesContext';
import BeatLoader from 'react-spinners/BeatLoader';
import AuthApiServiceObject from '../../services/auth-api-service';
import TokenServiceObject from '../../services/token-service';
import { css} from '@emotion/core';

export default class SignUpForm extends Component {

    static defaultProps = {
        onRegistrationSuccess: () => {}
    }

    static contextType = GamesContext;

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoading: false
        }
    }

    handleSignUpAuth = (e) => {
        e.preventDefault();

        var {user_name, password} = e.target;

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
                this.setState({
                    isLoading: false
                })
            })
            .then(this.props.onRegistrationSuccess(user_name.value, password.value))
            .catch(res => {
                this.setState({
                    error: res.error,
                    isLoading: false
                })
        })

    };

    render() {

        const override = css`
            display: block;
            margin-top: 5%;
            border-color: grey;
        `;

        const { error } = this.state;

        let isLoading = this.state.isLoading

        return (
            <div role="presentation" className={styles.signUpHolder}>
                <form onSubmit={e => this.handleSignUpAuth(e)}className={styles.signUpForm} id="signUpForm" name="signUpForm">

                    <legend className={styles.signUpLegend}>Sign Up</legend>

                    <div role='alert'>
                    {error && <p className={styles.error}>{error}</p>}
                    </div>

                    <label for="user_name" className={styles.usernameLabel}>Username:</label>
                    <input type="text" placeholder="username" name="user_name" className={styles.signUpUsername} id="signUpUsername" autoComplete='off'/>

                    <br/>

                    <label for="password" className={styles.passwordLabel}>Password:</label>
                    <input type="password" placeholder="password" name="password" className={styles.signUpPassword} id="signUpPassword" />

                    <br />

                    <div className={styles.loadingHolder}>
                        <BeatLoader
                            css={override}
                            sizeUnit={"px"}
                            size={15}
                            color={"#808080"}
                            loading={isLoading}
                        />

                    </div>

                    <button type="submit" for="signUpForm" className={styles.signUpButton}>Sign Up</button>

                    <div className={styles.passwordRequirementsHolder}>
                        <h1 className={styles.passwordRequirementsHeader}>Password requirements:</h1>
                        <ul className={styles.passwordRequirements}>
                            <li className={styles.passwordRequirementsItem}>Must contain 1 upper case letter</li>
                            <li className={styles.passwordRequirementsItem}>Must contain 1 lower case letter</li>
                            <li className={styles.passwordRequirementsItem}>Must contain 1 number</li>
                            <li className={styles.passwordRequirementsItem}>Must contain 1 special character</li>
                        </ul>
                    </div>

                </form>
            </div>
        )
    }
}
