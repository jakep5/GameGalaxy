import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import {GamesContext, GamesConsumer} from '../../contexts/GamesContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons'; 
import $ from 'jquery';

export default class ProfileNav extends Component {

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
                            <a className='hvr-bounce-to-bottom' onClick={(e) => value.handleSignOut(e)}>Sign Out</a>
                        </Link>

                        <Link to='/search' style={{ textDecoration: 'none' }}>
                            <FontAwesomeIcon icon={faUserAstronaut} className={styles.siteLogo}/>
                        </Link>

                        <Link to="/search" style={{ textDecoration: 'none' }}>
                            <a className='hvr-bounce-to-bottom'>Back to Search</a>
                        </Link>  
                    </nav>
                )}
            </GamesConsumer>
        )
    }
}
