import React, { Component } from 'react';
import styles from './styles.module.css';
import SignInForm from '../../components/SignInForm/SignInForm'
import { Link } from 'react-router-dom';

export default class SignInPage extends Component {


    componentDidMount() {
        document.title = "Sign In Page"
    }


    render() {
        return (
            <>
                <nav className={styles.nav} role="navigation">
                    <Link to="/signUp">
                        <p className={styles.signUpLink}>Sign Up</p>
                    </Link>
                    
                </nav>

                <main className={styles.main} role="main">

                    <section className={styles.signInWrapper} role="banner">
                        <SignInForm />
                    </section>

                </main>
                <footer className={styles.footer} role="contentinfo">Footer</footer>
            </>
        )
  }
}
