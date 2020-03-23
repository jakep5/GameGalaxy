import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import {GamesContext} from '../../contexts/GamesContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons'; 

export default class SignInNav extends Component {

    static contextType = GamesContext;

    handleIconClick = (e) => {
        window.location = '/';

        this.context.toggleJustSignedUp();
    };

    render() {
        return (
            <nav className={styles.nav}>

                <Link to="/" className='hvr-float-shadow' href='home'>
                    Return to Homepage
                </Link> 

                <FontAwesomeIcon icon={faUserAstronaut} className={styles.siteLogo} onClick={(e) => this.handleIconClick(e)}/>

                <Link to='/signUp' className='hvr-float-shadow' href='signUp'>
                    Sign Up
                </Link>
                                
            </nav>
        );
    };
};