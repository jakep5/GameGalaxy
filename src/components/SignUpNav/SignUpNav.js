import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import {GamesContext} from '../../contexts/GamesContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons'; 
import $ from 'jquery';

export default class SignUpNav extends Component {

    componentDidMount = () => {
        
    };

    static contextType = GamesContext;

    handleSignInClick = () => {
        this.context.toggleJustSignedUp();
    }

    handleIconClick = (e) => {
        window.location = '/';
    }

    render() {
        return (
            <nav className={styles.nav}>

                <Link to="/" style={{ textDecoration: 'none' }}>
                    <a className='hvr-float-shadow'>Return to Homepage</a>
                </Link> 

                <FontAwesomeIcon icon={faUserAstronaut} className={styles.siteLogo} onClick={(e) => this.handleIconClick(e)}/>

                <Link to="/signIn" style={{ textDecoration: 'none' }}>
                    <a className='hvr-float-shadow' onClick={() => this.handleSignInClick()}>Sign In</a>
                </Link>

                

                 
            </nav>
        )
    }
}
