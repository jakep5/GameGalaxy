import React, { Component } from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

export default class SignUpPage extends Component {
  render() {
    return (
      <>
        <nav className={styles.nav} role="navigation">
            <Link to="/signIn">
                Sign In
            </Link>
        </nav>
        <main className={styles.main} role="main">

            <section className={styles.signUpWrapper} role="banner">
                <div role="presentation" className={styles.signUpHolder}>
                    <form className={styles.signUpForm} id="signUpForm" name="signUpForm">

                        <legend className={styles.signUpLegend}>Sign Up</legend>

                        <label for="signUpUsername">Username:</label>
                        <input type="text" name="signUpUsername" className={styles.signUpUsername} id="signUpUsername" />

                        <br/>

                        <label for="signInPassword">Password:</label>
                        <input type="password" name="signUpPassword" className={styles.signUpPassword} id="signUpPassword" />

                        <br />

                        <button type="submit" for="signUpForm" className={styles.signUpButton}>Sign Up</button>

                    </form>
                </div>
            </section>

        </main>
        <footer className={styles.footer} role="content-info">Footer</footer>
      </>
    )
  }
}
