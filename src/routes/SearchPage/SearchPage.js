import React, { Component } from 'react';
import styles from './styles.module.css';
import SearchForm from '../../components/SearchForm/SearchForm';
import { GamesContext } from '../../contexts/GamesContext';
import { GamesConsumer } from '../../contexts/GamesContext';
import BeatLoader from 'react-spinners/BeatLoader';
import GameResults from '../../components/GameResults/GameResults';
import SearchPageNav from '../../components/SearchPageNav/SearchPageNav';
import { css } from '@emotion/core';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PlatformFilter from '../../components/PlatformFilter/PlatformFilter';
import GenreFilter from '../../components/GenreFilter/GenreFilter';
import ReviewFilter from '../../components/ReviewFilter/ReviewFilter';


export default class SearchPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showArrow: false,
            width: 0,
            height: 0,
            showFilters: false,
        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    };

    static contextType = GamesContext;

    parseJwt = (token) => {
        let base64Url = token.split('.')[1];
        let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        let jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    };

    componentDidMount = () => {

        this.updateWindowDimensions();

        this.setState({
            showFilters: false
        })

        window.addEventListener('resize', this.updateWindowDimensions);

        document.title = 'Search Page';

        const token = sessionStorage.getItem('game-galaxy-token-key');

        let payload = this.parseJwt(token);

        let tempUserId = payload.user_id;

        sessionStorage.setItem('user-id', tempUserId);

        let userId = sessionStorage.getItem('user-id');

        this.context.setFolders(userId);
    };

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }

    returnToTop = (e) => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0; 
    };

    /*Toggle display of up arrow upon hovering over footer*/
    setIsShown = (boolean) => {
        this.setState({
            showArrow: boolean
        })
    };
    /**/


    /*Toggle display of filters (only for larger screens)*/
    toggleShowFilters = () => {
        this.setState({
            showFilters: !this.state.showFilters
        })
    }   
    /**/

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
                        
                        <main className={styles.main} role='main'>

                            <section className={styles.searchPage}>
                                <SearchForm />

                                {this.state.width >= 1080 && 
                                    <>
                                        {this.state.showFilters === false
                                        ?
                                            <button 
                                                className={styles.showFilters}
                                                onClick={this.toggleShowFilters}
                                            >
                                                Show filters &#9660;
                                            </button>
                                        :   <button 
                                                className={styles.showFilters}
                                                onClick={this.toggleShowFilters}
                                            >
                                                Hide filters &#9650;
                                            </button>
                                        }

                                        {this.state.showFilters && 
                                            <div className={styles.filtersHolder} role='menu'>
                                                <PlatformFilter />

                                                <GenreFilter />

                                                <ReviewFilter />
                                            </div>
                                        }
                                    </>
                                }

                                {this.state.width < 1080 &&
                                    <div className={styles.filtersHolder} role='menu'>
                                        <PlatformFilter />

                                        <GenreFilter />

                                        <ReviewFilter />
                                    </div>
                                }
                                
                            </section>

                            <section id='searchResults' className={styles.searchResults}>
                                <h1 className={styles.searchResultHeader}>Search Results:</h1>

                                <div className={styles.loadingHolder}>
                                    <BeatLoader
                                        css={override}
                                        sizeUnit={'px'}
                                        size={15}
                                        color={'#808080'}
                                        loading={value.isLoading}
                                    />
                                </div>

                                <div id='searchResultHolder' className={styles.searchResultHolder} role='contentinfo'>
                                    <GameResults />
                                </div>


                            </section>

                        </main>
                        <footer className={styles.footer} role='navigation'>
                            <p  role='button'
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
        );
    };
}
