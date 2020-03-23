import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import {GamesContext, GamesConsumer} from '../../contexts/GamesContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons'; 

export default class SearchPageNav extends Component {

    static contextType = GamesContext;

    /*Toggle display of 'thanks for signing up' message in sign in form*/
    handleSignInClick = () => {
        this.context.toggleJustSignedUp();
    };
    /**/

    render() {
        return (
            <GamesConsumer>
                {value => (
                    <nav className={styles.nav}>
                        <Link to='/' className='hvr-float-shadow' href='sign out' onClick={(e) => value.handleSignOut(e)}>
                            Sign Out
                        </Link>

                        <FontAwesomeIcon icon={faUserAstronaut} className={styles.siteLogo}/>
                        
                        <Link to='/profile' className='hvr-float-shadow'href='#profile'>
                            My Profile
                        </Link>  
                    </nav>
                )}
            </GamesConsumer>
        );
    };
}
