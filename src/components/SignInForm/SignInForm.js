import React, { Component } from 'react'
import styles from './styles.module.css'
import BarLoader from 'react-spinners/BarLoader'

export default class SignInForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoading: false
        }
    }

    handleLogInAuth = (e) => {
        e.preventDefault();

        this.setState({
            error: null,
            isLoading: true
        });

        let { user_name, password } = e.target;

        AuthA


    }

    render() {
        return (
            <div role="presentation" className={styles.signInHolder}>
                <form onSubmit={(e) => this.handleLogInAuth(e)} className={styles.signInForm} id="signInForm" name="signInForm">

                    <legend className={styles.signInLegend}>Sign In</legend>

                    <label for="user_name">Username:</label>
                    <input type="text" name="user_name" id="signInUsername" placeholder="username" />
                    <br />
                    <label for="password">Password:</label>
                    <input type="password" name="password" id="signInPassword" placeholder="password"/>
                    <br />
                    <button type="submit" for="signInForm" className="signInButton">Sign In</button>
                </form>
            </div>
        )
    }
}
