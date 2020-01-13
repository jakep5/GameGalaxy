import React, { Component } from 'react';
import styles from './styles.module.css';
import { GamesContext } from '../../contexts/GamesContext';
import { GamesConsumer } from '../../contexts/GamesContext'


export default class GameResults extends Component {
    render() {
        return (
            <GamesConsumer>
                {value => (
                    <>
                        {value.games !== null
                        ? value.games.map((game) => {
                            return <div className={styles.resultItem}>
                                <p>{game.name}</p>
                            </div>
                        })
                        :   <h1 className={styles.noGames}>Please click search to search for games!</h1>
                        }
                    </>
                )}
            </GamesConsumer>
        )
    }
}
