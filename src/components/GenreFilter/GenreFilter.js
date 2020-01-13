import React, { Component } from 'react';
import styles from './styles.module.css';
import './styles.css';
import { GamesConsumer } from '../../contexts/GamesContext';
import { GamesContext } from '../../contexts/GamesContext';

export default class GenreFilter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    togglePanel = (e) => {
        this.setState({
            open: !this.state.open
        })
    }

    render() {
        return (
            <GamesConsumer>
                {value => (
                    <>
                        <button onClick={(e) => this.togglePanel(e)} type="button" className='collapsible'>Genre (click to expand)</button>
                        {this.state.open ? (
                            <div className='genreHolder'>

                                <label htmlFor="adventureSelect">Adventure</label>
                                <input onChange={(e) => value.handleGenreChange(e)} className={styles.inputCheck} value="Adventure" type="checkbox" id="adventureSelect" name="adventureSelect"/>

                                <label htmlFor="strategySelect">Strategy</label>
                                <input onChange={(e) => value.handleGenreChange(e)} className={styles.inputCheck} value="Strategy" type="checkbox" id="strategySelect" name="strategySelect" />

                                <label htmlFor="shooterSelect">Shooter</label>
                                <input onChange={(e) => value.handleGenreChange(e)} className={styles.inputCheck} value="Shooter" type="checkbox" id="shooterSelect" name="shooterSelect" />

                                <label htmlFor="rpgSelect">RPG</label>
                                <input onChange={(e) => value.handleGenreChange(e)} className={styles.inputCheck} value="RPG" type="checkbox" id="rpgSelect" name="rpgSelect" />

                                <label htmlFor="puzzleSelect">Puzzle</label>
                                <input onChange={(e) => value.handleGenreChange(e)} className={styles.inputCheck} value="Puzzle" type="checkbox" id="puzzleSelect" name="puzzleSelect" />

                                <label htmlFor="racingSelect">Racing</label>
                                <input onChange={(e) => value.handleGenreChange(e)} className={styles.inputCheck} value="Racing" type="checkbox" id="racingSelect" name="racingSelect"/>

                                <label htmlFor="fightingSelect">Fighting</label>
                                <input onChange={(e) => value.handleGenreChange(e)} className={styles.inputCheck} value="Fighting" type="checkbox" id="fightingSelect" name="fightingSelect"/>

                                <label htmlFor="rtsSelect">Real Time Strategy</label>
                                <input onChange={(e) => value.handleGenreChange(e)} className={styles.inputCheck} value="RTS" type="checkbox" id="rtsSelect" name="rtsSelect"/>

                                <label htmlFor="indieSelect">Indie</label>
                                <input onChange={(e) => value.handleGenreChange(e)} className={styles.inputCheck} value="Indie" type="checkbox" id="indieSelect" name="indieSelect"/>
                            </div>
                        )
                        : null }

                    </>
                )}

                </GamesConsumer>
        )
    }
}
