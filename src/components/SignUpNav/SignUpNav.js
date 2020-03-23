import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import {GamesContext} from '../../contexts/GamesContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons'; 

export default class SignUpNav extends Component {

    static contextType = GamesContext;

    /*Toggle display of 'thanks for signing up' message for sign in form*/
    handleSignInClick = () => {
        this.context.toggleJustSignedUp();
    };
    /**/

    handleIconClick = (e) => {
        window.location = '/';
    };

    render() {
        return (
            <nav className={styles.nav}>

                <Link to='/' className='hvr-float-shadow' href='home'>
                    Return to Homepage
                </Link> 

                <FontAwesomeIcon icon={faUserAstronaut} className={styles.siteLogo} onClick={(e) => this.handleIconClick(e)}/>

                <Link to='/signIn' className='hvr-float-shadow' href='#signIn' onClick={() => this.handleSignInClick()}>
                   Sign In
                </Link>

            </nav>
        );
    };
};
