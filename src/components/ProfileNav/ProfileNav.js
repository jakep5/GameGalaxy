import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import {GamesContext, GamesConsumer} from '../../contexts/GamesContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons'; 

export default class ProfileNav extends Component {

    static contextType = GamesContext;

    /*Toggle display of 'thanks for signing up' message on sign in form*/
    handleSignInClick = () => {
        this.context.toggleJustSignedUp();
    };
    /**/

    render() {
        return (
            <GamesConsumer>
                {value => (
                    <nav className={styles.nav}>
                        <Link to='/' style={{ textDecoration: 'none' }}>
                            <a className='hvr-float-shadow'href='#' onClick={(e) => value.handleSignOut(e)}>Sign Out</a>
                        </Link>

                        <Link to='/search' style={{ textDecoration: 'none' }}>
                            <FontAwesomeIcon icon={faUserAstronaut} className={styles.siteLogo}/>
                        </Link>

                        <Link to='/search' style={{ textDecoration: 'none' }}>
                            <a className='hvr-float-shadow' href='#search'>Back to Search</a>
                        </Link>  
                    </nav>
                )}
            </GamesConsumer>
        );
    };
};
