import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import {GamesContext, GamesConsumer} from '../../contexts/GamesContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons'; 
import $ from 'jquery';

export default class SearchPageNav extends Component {

    componentDidMount = () => {
        
    };

    static contextType = GamesContext;

    handleSignInClick = () => {
        this.context.toggleJustSignedUp();
    }

    render() {
        return (
            <GamesConsumer>
                {value => (
                    <nav className={styles.nav}>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <p className={styles.signOut} onClick={(e) => value.handleSignOut(e)}>Sign Out</p>
                        </Link>

                        <FontAwesomeIcon icon={faUserAstronaut} className={styles.siteLogo}/>
                        
                        <Link to="/profile" style={{ textDecoration: 'none' }}>
                            <p className={styles.profile}>My Profile</p>
                        </Link>  
                    </nav>
                )}
            </GamesConsumer>
        )
    }
}
