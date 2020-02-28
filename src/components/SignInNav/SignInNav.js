import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import {GamesContext} from '../../contexts/GamesContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons'; 
import $ from 'jquery';

export default class SignInNav extends Component {

    componentDidMount = () => {
        
    };

    static contextType = GamesContext;

    handleIconClick = (e) => {
        window.location = '/';

        this.context.toggleJustSignedUp();
    }

    render() {
        return (
            <nav className={styles.nav}>

                <Link to="/" style={{ textDecoration: 'none' }}>
                    <a className='hvr-bounce-to-bottom'>Return to Homepage</a>
                </Link> 

                <FontAwesomeIcon icon={faUserAstronaut} className={styles.siteLogo} onClick={(e) => this.handleIconClick(e)}/>

                <Link to="/signUp" style={{ textDecoration: 'none' }}>
                    <a className='hvr-bounce-to-bottom'>Sign Up</a>
                </Link>

                

                 
            </nav>
        )
    }
}