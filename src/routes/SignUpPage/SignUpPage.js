import React, { Component } from 'react';
import styles from './styles.module.css';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import { GamesContext } from '../../contexts/GamesContext';
import SignUpNav from '../../components/SignUpNav/SignUpNav';

export default class SignUpPage extends Component {

    static defaultProps = {
        history: {
            push: () => {}
        }
    };

    static contextType = GamesContext;

    handleRegistrationSuccess = () => {

       window.location = '/signIn';

    };

    componentDidMount() {
        document.title = 'Sign Up Page';
    };

    render() {
        return (
            <>
                <SignUpNav />

                <main className={styles.main} role='main'>

                    <section className={styles.signUpWrapper} role='banner'>
                        <SignUpForm onRegistrationSuccess={this.handleRegistrationSuccess}/>
                    </section>

                </main>
            </>
        );
    };
};
