import React, { Component } from 'react';
import styles from './styles.module.css';
import { GamesContext } from '../../contexts/GamesContext';
import PlatformFilter from '../PlatformFilter/PlatformFilter';
import GenreFilter from '../GenreFilter/GenreFilter';
import ReviewFilter from '../ReviewFilter/ReviewFilter';
import config from '../../config';
import GameApiServiceObject from '../../services/game-api-service'

export default class SearchForm extends Component {

    static contextType = GamesContext;

    constructor(props) {
        super(props);
        this.state = {
            games: null
        }
    }

    handleSearchSubmit = (e) => {
        e.preventDefault();

        const title = document.getElementById('nameInput').value;

        const newItem = {
            "title": title,
        }

        let gameTitle = newItem.title;

        console.log(gameTitle);

        const url = config.IGDB_BASE_URL;

        let platformFilters = this.context.platformFilters;

        let genreFilters = this.context.genreFilters;


        fetch(url, {
            method: 'GET',
            headers: {
                'gameTitle': gameTitle,
                'platformFilters': platformFilters,
                'genreFilters': genreFilters,
            }
        })
            .then(response => response.json())
            .then(responseJson => this.context.setNewGames(responseJson))
            .catch(error => {
                console.log(error)
        })
    }

    render() {
        return (

            <form onSubmit={(e) => this.handleSearchSubmit(e)} className={styles.searchForm} id="searchForm">

                <label className={styles.nameInputLabel} htmlFor="nameInput" id="nameInputLabel">Name of game:</label>
                <input className={styles.nameInput} type="text" id="nameInput" name="nameInput" />

                <PlatformFilter />

                <GenreFilter />

                <ReviewFilter />

            </form>
        )
    }
}
