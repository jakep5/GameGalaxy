import React, { Component } from 'react';
import styles from './styles.module.css';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import { GamesContext } from '../../contexts/GamesContext';
import AuthApiServiceObject from '../../services/auth-api-service';
import TokenServiceObject from '../../services/token-service';
import { Link } from 'react-router-dom';

export default class SignUpPage extends Component {

    static defaultProps = {
        history: {
            push: () => {}
        }
    }

    static contextType = GamesContext;

    handleRegistrationSuccess = () => {

       window.location = '/signIn';

    };

    componentDidMount() {
        document.title = "Sign Up Page"
    };

    handleSignInClick = () => {
        this.context.toggleJustSignedUp();
    }

    render() {
        return (
        <>
            <nav className={styles.nav} role="navigation">
                <Link to="/signIn" onClick={() => this.handleSignInClick()}>
                    Sign In
                </Link>
            </nav>
            <main className={styles.main} role="main">

                <section className={styles.signUpWrapper} role="banner">
                    <SignUpForm onRegistrationSuccess={this.handleRegistrationSuccess}/>
                </section>

            </main>
            <footer className={styles.footer} role="content-info">Footer</footer>
        </>
        )
    }
}
