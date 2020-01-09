import React, { Component } from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import SearchForm from '../../components/SearchForm/SearchForm';
import { GamesContext } from '../../contexts/GamesContext';
import { GamesConsumer } from '../../contexts/GamesContext'

export default class SearchPage extends Component {

    static contextType = GamesContext;

    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        document.title = "Search Page";

        const token = sessionStorage.getItem('game-galaxy-token-key');
        let payload = this.parseJwt(token);
        let userId = payload.user_id;

        this.context.setUserId(userId);
    };

    parseJwt = (token) => {
        let base64Url = token.split('.')[1];
        let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        let jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    }

    render() {
        return (
            <GamesConsumer>
                {value => (
                    <>
                        <nav className={styles.nav} role="navigation">
                            <Link to="/">
                                <p className={styles.signOut}>Sign Out</p>
                            </Link>
                            
                            <Link to="/profile">
                                <p className={styles.profile}>My Profile</p>
                            </Link>
                        </nav>
                        <main className={styles.main} role="main">

                            <section className={styles.searchPage}>
                                <SearchForm />
                            </section>

                            <section className={styles.searchResults}>
                                <h1 className={styles.searchResultHeader}>Search Results:</h1>

                                <div className={styles.searchResultHolder}>

                                    <div className={styles.resultItem}>
                                        <p>Game 1</p>
                                    </div>
                                    <div className={styles.resultItem}>
                                        <p>Game 2</p>
                                    </div>
                                    <div className={styles.resultItem}>
                                        <p>Game 3</p>
                                    </div>
                                    <div className={styles.resultItem}>
                                        <p>Game 4</p>
                                    </div>
                                    <div className={styles.resultItem}>
                                        <p>Game 5</p>
                                    </div>
                                    <div className={styles.resultItem}>
                                        <p>Game 6</p>
                                    </div>

                                </div>


                            </section>

                        </main>
                        <footer className={styles.footer} role="content-info">Footer</footer>
                    </>
                )}
            </GamesConsumer>
        )
    }
}
