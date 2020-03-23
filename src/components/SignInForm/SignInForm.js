import React, { Component } from 'react'
import styles from './styles.module.css'
import BeatLoader from 'react-spinners/BeatLoader';
import { GamesContext, GamesConsumer } from '../../contexts/GamesContext'
import AuthApiServiceObject from '../../services/auth-api-service'
import TokenServiceObject from '../../services/token-service';
import { css } from '@emotion/core';

export default class SignInForm extends Component {

    static contextType = GamesContext;

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoading: false,
            username: '',
            password: ''
        }
    };

    handleLogInAuth = (e) => {
        e.preventDefault();

        this.setState({
            error: null,
            isLoading: true
        });

        let username = this.state.username;

        let userPassword = this.state.password;

        AuthApiServiceObject.logIn({
            user_name: username,
            password: userPassword
        })
            .then(res => {
                this.context.setCurrentUser(username);
                TokenServiceObject.saveAuthToken(res.authToken);
                this.setState({
                    isLoading: false,
                    username: '',
                    password: ''
                });
                this.props.onLogInSuccess(username);
            })
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
    };

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

            <GamesConsumer>
                {value => (
                    <div role='presentation' className={styles.signInHolder}>

                        {value.justSignedUp &&
                            <p className={styles.justSignedUp}>Thanks for signing up! Please sign in.</p>
                        }

                        <form onSubmit={(e) => this.handleLogInAuth(e)} className={styles.signInForm} id='signInForm' name='signInForm'>

                            <h1 className={styles.signInLegend} id='signInLabel'>Sign In</h1>

                            <div className={styles.errorDiv} role='alert'>
                            {error && <p className={styles.error}>{error}</p>}
                            </div>

                            <div className={styles.justSignedUpDiv} role='alert'>
                            {justSignedUp && <p className={styles.justSignedUp}>Thanks for signing up! Please sign in.</p>}
                            </div>

                            <label className={styles.userNameLabel} htmlFor='user_name'>Username</label>
                            <input 
                                className={styles.signInUsername} 
                                value={this.state.username}
                                onChange={(e) => this.handleUsernameChange(e)}
                                type='text' 
                                name='user_name' 
                                id='signInUsername' 
                                placeholder='username' 
                                autoComplete='off'
                            />
                            <br />
                            <label className={styles.passwordLabel} htmlFor='password'>Password</label>
                            <input 
                                className={styles.signInPassword} 
                                value={this.state.password}
                                onChange={(e) => this.handlePasswordChange(e)}
                                type='password' 
                                name='password' 
                                id='signInPassword' 
                                placeholder='password'/>
                            <br />
                            <button type='submit' htmlFor='signInForm' className={styles.signInButton}>Sign In</button>
                        </form>

                        <div className={styles.loadingHolder}>
                            <BeatLoader
                                css={override}
                                sizeUnit={'px'}
                                size={15}
                                color={'#808080'}
                                loading={isLoading}
                            />
                        </div>

                        <div className={styles.demoHolder}>
                            <h1 className={styles.demoAccountLabel}>Demo account:</h1>
                            <ul className={styles.demoAccount}>
                                <li className={styles.demoUsername}>Username: testuser</li>
                                <li className={styles.demoPassword}>Password: !Testpassword1</li>
                            </ul>
                        </div>      
                    </div>
                )}
            </GamesConsumer>     
        );
    };
};
