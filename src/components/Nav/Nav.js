import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import {GamesContext} from '../../contexts/GamesContext';
import $ from 'jquery';

export default class Nav extends Component {

    componentDidMount = () => {
        
    };

    static contextType = GamesContext;

    handleSignInClick = () => {
        this.context.toggleJustSignedUp();
    }

    render() {
        return (
            <nav className={styles.nav}>
                <Link to="/signIn" style={{ textDecoration: 'none' }}>
                    <p className={styles.signIn} onClick={() => this.handleSignInClick()}>Sign In</p>
                </Link>

                <Link to="/signUp" style={{ textDecoration: 'none' }}>
                    <p className={styles.signUp}>Sign Up</p>
                </Link>  
            </nav>
        )
    }
}
