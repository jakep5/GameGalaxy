import React, { Component } from 'react';
import styles from './styles.module.css';
import { GamesContext } from '../../contexts/GamesContext';
import { GamesConsumer } from '../../contexts/GamesContext';
import GameResultItem from '../GameResultItem/GameResultItem';
import AddFolderWindow from '../AddFolderWindow/AddFolderWindow'


export default class GameResults extends Component {
    render() {
        return (
            <GamesConsumer>
                {value => (
                    <>
                        {value.games !== null
                            ? value.games.map((game) => {
                                if (value.games == []) {
                                    return <h1 className={styles.noGames}>No results</h1>
                                } else {
                                    return <GameResultItem 
                                                name={game.name}
                                                genres={game.genres}
                                                platforms={game.platforms}
                                                rating={game.rating}
                                            />
                                }
                            })
                            :   <h1 className={styles.noGames}>Please click search to search for games!</h1>
                        }

                        {this.context.addFolder == 'true'
                        ? <AddFolderWindow />
                        : null}
                    </>
                )}
            </GamesConsumer>
        )
    }
}
