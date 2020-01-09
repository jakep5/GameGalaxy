import React, { Component } from 'react';
import styles from './styles.module.css';
import GamesContext from '../../contexts/GamesContext';
import PlatformFilter from '../PlatformFilter/PlatformFilter';
import GameApiServiceObject from '../../services/game-api-service'

export default class SearchForm extends Component {
    
    static contextType = GamesContext;

    handleSearchSubmit = (e) => {
        e.preventDefault();

        const title = document.getElementById('nameInputLabel').value;

        const newItem = {
            "title": title,
        }

        GameApiServiceObject.titleSearch(newItem)
            .then(games => {
                console.log(games);
                /* this.context.handleGameSearch(games) */
            })
    }

    render() {
        return (

            <form onSubmit={(e) => this.handleSearchSubmit(e)} className={styles.searchForm} id="searchForm">

                <label className={styles.nameInputLabel} htmlFor="nameInput" id="nameInputLabel">Name of game:</label>
                <input className={styles.nameInput} type="text" id="nameInput" name="nameInput" />

                <PlatformFilter />

            </form>
        )
    }
}
