import React, { Component } from 'react';
import styles from './styles.module.css';
import SignUpForm from '../../components/SignUpForm/SignUpForm'
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
                <SignUpForm />
            </section>

        </main>
        <footer className={styles.footer} role="content-info">Footer</footer>
      </>
    )
  }
}
