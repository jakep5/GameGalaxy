import React, { Component } from 'react';
import styles from './styles.module.css';
import { GamesConsumer } from '../../contexts/GamesContext';

export default class GenreFilter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    };

    togglePanel = (e) => {
        this.setState({
            open: !this.state.open
        })
    };

    render() {

        return (
            <GamesConsumer>
                {value => (
                    <>
                        <h1 className={styles.genreFilterTitle}>Genre Filters</h1>
                            <div className={styles.genreHolder}>

                                <ul className={styles.genreFilterList}>
                                    <li className={styles.genreFilterItem}>
                                        <label htmlFor='adventureSelect'>Adventure</label>
                                        <input onChange={(e) => value.handleGenreChange(e)} className={styles.inputCheck} value='Adventure' type='checkbox' id='adventureSelect' name='adventureSelect'/>
                                    </li>
                                    <li className={styles.genreFilterItem}>
                                        <label htmlFor='strategySelect'>Strategy</label>
                                        <input onChange={(e) => value.handleGenreChange(e)} className={styles.inputCheck} value='Strategy' type='checkbox' id='strategySelect' name='strategySelect' />
                                    </li>
                                    <li className={styles.genreFilterItem}>
                                        <label htmlFor='shooterSelect'>Shooter</label>
                                        <input onChange={(e) => value.handleGenreChange(e)} className={styles.inputCheck} value='Shooter' type='checkbox' id='shooterSelect' name='shooterSelect' />
                                    </li>
                                    <li className={styles.genreFilterItem}>
                                        <label htmlFor='rpgSelect'>RPG</label>
                                        <input onChange={(e) => value.handleGenreChange(e)} className={styles.inputCheck} value='RPG' type='checkbox' id='rpgSelect' name='rpgSelect' />
                                    </li>
                                    <li className={styles.genreFilterItem}>
                                        <label htmlFor='puzzleSelect'>Puzzle</label>
                                        <input onChange={(e) => value.handleGenreChange(e)} className={styles.inputCheck} value='Puzzle' type='checkbox' id='puzzleSelect' name='puzzleSelect' />
                                    </li>
                                    <li className={styles.genreFilterItem}>
                                        <label htmlFor='racingSelect'>Racing</label>
                                        <input onChange={(e) => value.handleGenreChange(e)} className={styles.inputCheck} value='Racing' type='checkbox' id='racingSelect' name='racingSelect'/>
                                    </li>
                                    <li className={styles.genreFilterItem}>
                                        <label htmlFor='fightingSelect'>Fighting</label>
                                        <input onChange={(e) => value.handleGenreChange(e)} className={styles.inputCheck} value='Fighting' type='checkbox' id='fightingSelect' name='fightingSelect'/>
                                    </li>
                                    <li className={styles.genreFilterItem}>
                                        <label htmlFor='rtsSelect'>Real Time Strategy</label>
                                        <input onChange={(e) => value.handleGenreChange(e)} className={styles.inputCheck} value='RTS' type='checkbox' id='rtsSelect' name='rtsSelect'/>
                                    </li>
                                    <li className={styles.genreFilterItem}>
                                        <label htmlFor='indieSelect'>Indie</label>
                                        <input onChange={(e) => value.handleGenreChange(e)} className={styles.inputCheck} value='Indie' type='checkbox' id='indieSelect' name='indieSelect'/>
                                    </li>
                                </ul>                        
                            </div>
                    </>
                )}
                </GamesConsumer>
        );
    };
};
