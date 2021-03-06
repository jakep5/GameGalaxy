import React, { Component } from 'react';
import styles from './styles.module.css';
import SignInForm from '../../components/SignInForm/SignInForm';
import GamesContext from '../../contexts/GamesContext';
import SignInNav from '../../components/SignInNav/SignInNav';

export default class SignInPage extends Component {

    static contextType = GamesContext;

    /*Navigate to search page upon successful login*/
    handleLogInSuccess = () => {;
        const { history } = this.props;

        history.push('/search')
    };
    /**/

    componentDidMount() {
        document.title = 'Sign In Page';
    };

    render() {
        return (
            <>
                <SignInNav />

                <main className={styles.main} role='main'>

                    <section className={styles.signInWrapper} role='banner'>
                        <SignInForm onLogInSuccess={this.handleLogInSuccess}/>
                    </section>

                </main>
            </>
        );
    };
};
