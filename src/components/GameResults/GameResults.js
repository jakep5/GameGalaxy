import React, { Component } from 'react';
import styles from './styles.module.css';
import { GamesConsumer } from '../../contexts/GamesContext';
import GameResultItem from '../GameResultItem/GameResultItem';
import AddFolderWindow from '../AddFolderWindow/AddFolderWindow'
import FolderSuccessPopup from '../FolderSuccessPopup/FolderSuccessPopup';


export default class GameResults extends Component {
    render() {
        return (
            <GamesConsumer>
                {value => (
                    <>
                        {value.games === [] && <h1 className={styles.noGames}>No results</h1>}
                            
                        {value.games !== null && value.games.map((game) => {
                            return <GameResultItem 
                                        name={game.name}
                                        genres={game.genres}
                                        platforms={game.platforms}
                                        rating={game.rating}
                                        id={game.id}
                            />
                        })
                        }

                        {value.addFolder === true &&
                         <AddFolderWindow />
                        }

                        {value.successMessage === true &&
                        <FolderSuccessPopup />
                        }
                    </>
                )}
            </GamesConsumer>
        )
    }
}
