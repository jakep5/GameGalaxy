import React, { Component } from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

export default class SignInPage extends Component {
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
                    <div role="presentation" className={styles.signInHolder}>
                        <form className={styles.signInForm} id="signInForm" name="signInForm">

                            <legend className={styles.signInLegend}>Sign In</legend>

                            <label for="signInUsername">Username:</label>
                            <input type="text" name="signInUsername" id="signInUsername" />
                            <br />
                            <label for="signInPassword">Password:</label>
                            <input type="password" name="signInPassword" id="signInPassword" />
                            <br />
                            <button type="submit" for="signInForm" className="signInButton">Sign In</button>
                        </form>
                    </div>
                </section>

            </main>
            <footer className={styles.footer} role="contentinfo">Footer</footer>
        </>
    )
  }
}
