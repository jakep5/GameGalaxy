import React, { Component } from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import SearchForm from '../../components/SearchForm/SearchForm';

export default class SearchPage extends Component {

    componentDidMount() {
        document.title = "Search Page"
    }

    render() {
        return (
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
        )
    }
}
