import React, { Component } from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import SearchForm from '../../components/SearchForm/SearchForm';
import { GamesContext } from '../../contexts/GamesContext';
import { GamesConsumer } from '../../contexts/GamesContext';
import BeatLoader from 'react-spinners/BeatLoader';
import GameResults from '../../components/GameResults/GameResults';
import SearchPageNav from '../../components/SearchPageNav/SearchPageNav';
import { css } from '@emotion/core';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class SearchPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showArrow: false
        }
    }

    static contextType = GamesContext;

    parseJwt = (token) => {
        let base64Url = token.split('.')[1];
        let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        let jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    };

    componentWillMount = () => {

        document.title = 'Search Page';

        const token = sessionStorage.getItem('game-galaxy-token-key');
        let payload = this.parseJwt(token);

        let tempUserId = payload.user_id;

        sessionStorage.setItem('user-id', tempUserId);

        let userId = sessionStorage.getItem('user-id');

        this.context.setFolders(userId);
    };

    returnToTop = (e) => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0; 
    };

    setIsShown = (boolean) => {
        this.setState({
            showArrow: boolean
        })
    };

    render() {

        const override = css`
            display: block;
            margin-top: 5%;
            border-color: grey;
        `;

        const showArrow = this.state.showArrow;

        return (
            <GamesConsumer>
                {value => (
                    <>
                        <SearchPageNav />
                        
                        <main className={styles.main} role="main">

                            <section className={styles.searchPage}>
                                <SearchForm />
                            </section>

                            <section id='searchResults' className={styles.searchResults}>
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
                        <footer className={styles.footer} role="content-info" >
                            <p 
                                onMouseEnter={() => this.setIsShown(true)}
                                onMouseLeave={() => this.setIsShown(false)}
                                className={styles.returnToTop} 
                                onClick={(e) => this.returnToTop(e)}
                            >Return to Top</p>
                            {showArrow && <FontAwesomeIcon icon={faArrowUp} className={styles.arrowUp}/>}
                        </footer>
                    </>
                )}
            </GamesConsumer>
        )
    }
}
