import React, { Component } from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import SearchForm from '../../components/SearchForm/SearchForm';
import { GamesContext } from '../../contexts/GamesContext';
import { GamesConsumer } from '../../contexts/GamesContext';
import BeatLoader from 'react-spinners/BeatLoader';
import GameResults from '../../components/GameResults/GameResults';
import { css } from '@emotion/core';

export default class SearchPage extends Component {

    static contextType = GamesContext;

    componentWillMount = () => {

        let userId = sessionStorage.getItem('user-id');

        this.context.setFolders(userId);
    }

    render() {

        const override = css`
            display: block;
            margin-top: 5%;
            border-color: grey;
        `;

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

                                <div className={styles.loadingHolder}>
                                    <BeatLoader
                                        css={override}
                                        sizeUnit={"px"}
                                        size={15}
                                        color={"#808080"}
                                        loading={value.isLoading}
                                    />
                                </div>

                                <div className={styles.searchResultHolder}>
                                    <GameResults />
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
