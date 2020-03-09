import React, { Component } from 'react'
import styles from './styles.module.css'
import GamesContext from '../../contexts/GamesContext';
import BeatLoader from 'react-spinners/BeatLoader';
import AuthApiServiceObject from '../../services/auth-api-service';
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
            isLoading: false,
            username: '',
            password: ''
        };
    };

    handleSignUpAuth = (e) => {
        e.preventDefault();

        let username = this.state.username;

        let userPassword = this.state.password;

        this.setState({
            error: null,
            isLoading: true,
            username: '',
            password: ''
        });

        AuthApiServiceObject.registerUser({
            user_name: username,
            password: userPassword  
        })
            .then(res => {
                this.setState({
                    isLoading: false
                })
            })
            .then(this.props.onRegistrationSuccess(username, userPassword))
            .catch(res => {
                this.setState({
                    error: res.error,
                    isLoading: false
                })
        })
    };

    handleUsernameChange = (e) => {
        this.setState({
            username: e.target.value,
        })
    };

    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value,
        })
    }

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
                    <input 
                        value={this.state.username}
                        onChange={(e) => this.handleUsernameChange(e)}
                        type="text" 
                        placeholder="username" 
                        name="user_name" 
                        className={styles.signUpUsername} 
                        id="signUpUsername" 
                        autoComplete='off'
                    />

                    <br/>

                    <label for="password" className={styles.passwordLabel}>Password:</label>
                    <input
                        value={this.state.password}
                        onChange={(e) => this.handlePasswordChange(e)} 
                        type="password" 
                        placeholder="password" 
                        name="password" 
                        className={styles.signUpPassword} 
                        id="signUpPassword" 
                    />

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
        );
    };
};
