import React, { Component } from 'react'
import styles from './styles.module.css'
import BeatLoader from 'react-spinners/BeatLoader';
import { GamesContext } from '../../contexts/GamesContext'
import AuthApiServiceObject from '../../services/auth-api-service'
import TokenServiceObject from '../../services/token-service';
import { css } from '@emotion/core';

export default class SignInForm extends Component {

    static contextType = GamesContext;

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoading: false
        }
    }

    handleLogInAuth = (e) => {
        e.preventDefault();

        this.setState({
            error: null,
            isLoading: true
        });

        let { user_name, password } = e.target;

        AuthApiServiceObject.logIn({
            user_name: user_name.value,
            password: password.value
        })
            .then(res => {
                this.context.setCurrentUser(user_name.value);
                user_name.value = '';
                password.value = '';
                TokenServiceObject.saveAuthToken(res.authToken);
                this.setState({
                    isLoading: false
                });
                this.props.onLogInSuccess(user_name);
            })
            .catch(res => {
                this.setState({
                    error: res.error,
                    isLoading: false
                })
            })
    }

    render() {

        const override = css`
            display: block;
            margin-top: 5%;
            border-color: grey;
        `;

        let justSignedUp = this.props.justSignedUp;

        let isLoading = this.state.isLoading;

        const { error } = this.state;

        return (
            <div role="presentation" className={styles.signInHolder}>
                <form onSubmit={(e) => this.handleLogInAuth(e)} className={styles.signInForm} id="signInForm" name="signInForm">

                    <legend className={styles.signInLegend}>Sign In</legend>

                    <div className={styles.errorDiv} role='alert'>
                    {error && <p className={styles.error}>{error}</p>}
                    </div>

                    <div className={styles.justSignedUpDiv} role='alert'>
                    {justSignedUp && <p className={styles.justSignedUp}>Thanks for signing up! Please sign in.</p>}
                    </div>

                    <label for="user_name">Username:</label>
                    <input type="text" name="user_name" id="signInUsername" placeholder="username" />
                    <br />
                    <label for="password">Password:</label>
                    <input type="password" name="password" id="signInPassword" placeholder="password"/>
                    <br />
                    <button type="submit" for="signInForm" className="signInButton">Sign In</button>
                </form>

                <div className={styles.loadingHolder}>
                    <BeatLoader
                        css={override}
                        sizeUnit={"px"}
                        size={15}
                        color={"#808080"}
                        loading={isLoading}
                    />
                </div>


                <h1 className={styles.demoAccountLabel}>Demo account:</h1>
                <ul className={styles.demoAccount}>
                    <li className={styles.demoUsername}>Username: testuser</li>
                    <li className={styles.demoPassword}>Password: !Testpassword1</li>
                </ul>
            </div>
        )
    }
}
