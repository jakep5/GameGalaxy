import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import './styles.css';
import {GamesContext} from '../../contexts/GamesContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons'; 

export default class HomepageNav extends Component {

    static contextType = GamesContext;

    /*Toggle display of 'thanks for signing up' message on sign in form */
    handleSignInClick = () => {
        this.context.toggleJustSignedUp();
    };
    /**/

    render() {
        return (
            <nav className={styles.nav} id='navbar'>
                <Link to="/signIn" onClick={() => this.handleSignInClick()} className='hvr-float-shadow' href='#signIn'>
                    Sign In
                </Link>

                <FontAwesomeIcon icon={faUserAstronaut} className={styles.siteLogo}/>

                <Link to='/signUp' className='hvr-float-shadow' href='signUp'>
                    Sign Up
                </Link>  
            </nav>
        );
    };
};
