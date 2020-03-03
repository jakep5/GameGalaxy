import React, { Component } from 'react';
import styles from './styles.module.css';
import { GamesContext } from '../../contexts/GamesContext';
import PlatformFilter from '../PlatformFilter/PlatformFilter';
import GenreFilter from '../GenreFilter/GenreFilter';
import ReviewFilter from '../ReviewFilter/ReviewFilter';
import BeatLoader from 'react-spinners/BeatLoader';
import config from '../../config';

export default class SearchForm extends Component {

    static contextType = GamesContext;

    constructor(props) {
        super(props);
        this.state = {
            games: null,
            isLoading: false,
        }
    }

    handleSearchSubmit = (e) => {
        e.preventDefault();

        const title = document.getElementById('nameInput').value;

        const newItem = {
            "title": title,
        }

        let gameTitle = newItem.title;

        const url = config.IGDB_BASE_URL;

        let platformFilters = this.context.platformFilters;

        let genreFilters = this.context.genreFilters;

        let reviewFilter = this.context.reviewFilter;

        this.context.toggleLoading();


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
            .then(responseJson => this.context.setNewGames(responseJson))
            .catch(error => {
                console.log(error)
        })

     /*    this.coverArtSearch(title); */
    }

    /* coverArtSearch(title) {
        let coverArtUrl = config.TWITCH_BASE_URL;

        let queryString = encodeURIComponent(title);

        console.log(process.env.REACT)

        fetch(coverArtUrl + queryString, {
            method: 'GET',
            'Client-ID': config.TWITCH_CLIENT_ID,
        })
            .then(response => response.json())
            .then(responseJson => console.log(responseJson))
            .catch(error => {
                console.log(error);
            })
    } */

    render() {
        return (
            <>
                <div className={styles.scrollToResultsHolder}>
                    <button className={styles.scrollToResults}>Scroll to results</button>
                </div>

                <form onSubmit={(e) => this.handleSearchSubmit(e)} className={styles.searchForm} id="searchForm">

                    <label className={styles.nameInputLabel} htmlFor="nameInput" id="nameInputLabel">Name of game:</label>
                    <input className={styles.nameInput} type="text" id="nameInput" name="nameInput" autoComplete='off'/>

                    <button id='callToActionButton' type='submit' htmlFor='searchForm' className={styles.searchButton}>
                        Search
                        <div className={styles.searchButtonHorizontal}></div>
                        <div className={styles.searchButtonVertical}></div>
                    </button> 

                    <div className={styles.filtersHolder}>
                        <PlatformFilter />

                        <GenreFilter />

                        <ReviewFilter />
                    </div>
                        
                </form>
            </>
        )
    }
}
