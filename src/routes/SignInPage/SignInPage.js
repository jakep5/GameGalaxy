import React, { Component } from 'react';
import styles from './styles.module.css';
import SignInForm from '../../components/SignInForm/SignInForm';
import GamesContext from '../../contexts/GamesContext';
import SignInNav from '../../components/SignInNav/SignInNav';
import { Link } from 'react-router-dom';

export default class SignInPage extends Component {

    static contextType = GamesContext;

    constructor(props) {
        super(props)
    }

    handleLogInSuccess = (user_name) => {;
        const { history } = this.props;

        history.push('/search')
    }


    componentDidMount() {
        document.title = "Sign In Page"
    }

    render() {

        return (
            <>
                <SignInNav />

                <main className={styles.main} role="main">

                    <section className={styles.signInWrapper} role="banner">
                        <SignInForm onLogInSuccess={this.handleLogInSuccess}/>
                    </section>

                </main>
            </>
        )
  }
}
