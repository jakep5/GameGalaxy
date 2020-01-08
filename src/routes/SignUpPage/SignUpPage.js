import React, { Component } from 'react';
import styles from './styles.module.css';
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import { Link } from 'react-router-dom';

export default class SignUpPage extends Component {

    static defaultProps = {
        history: {
            push: () => {}
        }
    }

    handleRegistrationSuccess = (e) => {
        const { history } = this.props;

        history.push('/signIn');
    }

    componentDidMount() {
        document.title = "Sign Up Page"
    }

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
                    <SignUpForm onRegistrationSuccess={(e) => this.handleRegistrationSuccess(e)}/>
                </section>

            </main>
            <footer className={styles.footer} role="content-info">Footer</footer>
        </>
        )
    }
}
