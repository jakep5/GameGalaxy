import React, { Component } from 'react';
import styles from './styles.module.css';
import { GamesContext } from '../../contexts/GamesContext';
import PlatformFilter from '../PlatformFilter/PlatformFilter';
import GenreFilter from '../GenreFilter/GenreFilter';
import ReviewFilter from '../ReviewFilter/ReviewFilter';
import config from '../../config';

export default class SearchForm extends Component {

    static contextType = GamesContext;

    constructor(props) {
        super(props);
        this.state = {
            games: null,
            isLoading: false,
            gameName: ''
        }
    }

    scrollToResults = (e) => {
        document.getElementById('searchResults').scrollIntoView();
    };

    handleSearchSubmit = (e) => {
        e.preventDefault();

        this.context.clearSearchResults();

        let gameTitle = this.state.gameName;

        let platformFilters = this.context.platformFilters;

        let genreFilters = this.context.genreFilters;

        let reviewFilter = this.context.reviewFilter;

        this.context.toggleLoading();

        const url = config.IGDB_BASE_URL;

        fetch(url, {
            method: 'GET',
            headers: {
                "gameTitle": gameTitle,
                "platformFilters": platformFilters,
                "genreFilters": genreFilters,
                "reviewFilter": reviewFilter,
                "Access-Control-Allow-Headers": "gameTitle, platformFilters, genreFilters, reviewFilter",
                "Access-Control-Allow-Origin": "https://game-galaxy.jakepagel1.now.sh",
                "Access-Control-Allow-Methods": "GET,POST,DELETE,PATCH"
            }
        })
            .then(response => response.json())
            .then(responseJson => {
                if (responseJson.length === 0) {
                    alert('No results found');
                    this.context.toggleLoading();
                } else {
                    this.context.setNewGames(responseJson);
                }
            })
            .catch(error => {
                console.log(error)
        });
    };

    handleGameNameChange = (e) => {
        this.setState({
            gameName: e.target.value
        })
    };

    render() {
        return (
            <>
                <div className={styles.scrollToResultsHolder} role='button'>
                    <button onClick={(e) => this.scrollToResults(e)} className={styles.scrollToResults}>Scroll to results</button>
                </div>

                <form onSubmit={(e) => this.handleSearchSubmit(e)} className={styles.searchForm} id='searchForm'>

                    <label className={styles.nameInputLabel} htmlFor='nameInput' id='nameInputLabel'>Name of game:</label>
                    <input 
                        className={styles.nameInput} 
                        value={this.state.gameName}
                        onChange={(e) => this.handleGameNameChange(e)}
                        type='text' 
                        id='nameInput' 
                        name='nameInput' 
                        autoComplete='off' 
                        required
                    />

                    <button id='callToActionButton' type='submit' htmlFor='searchForm' className={styles.searchButton}>
                        Search
                        <div className={styles.searchButtonHorizontal}></div>
                        <div className={styles.searchButtonVertical}></div>
                    </button> 

                    <div className={styles.filtersHolder} role='menu'>
                        <PlatformFilter />

                        <GenreFilter />

                        <ReviewFilter />
                    </div>
          
                </form>
            </>
        );
    };
}
