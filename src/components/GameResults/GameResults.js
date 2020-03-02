import React, { Component } from 'react';
import styles from './styles.module.css';
import { GamesContext } from '../../contexts/GamesContext';
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
                        {value.games !== []
                            ? value.games.map((game) => {
                                if (game == undefined) {
                                    return <h1 className={styles.noGames}>No results</h1>
                                } else {
                                    return <GameResultItem 
                                                name={game.name}
                                                genres={game.genres}
                                                platforms={game.platforms}
                                                rating={game.rating}
                                                id={game.id}
                                            />
                                }
                            })
                            :   <h1 className={styles.noGames}>Please click search to search for games!</h1>
                        }

                        {value.addFolder == true &&
                         <AddFolderWindow />
                        }

                        {value.successMessage == true &&
                        <FolderSuccessPopup />
                        }
                    </>
                )}
            </GamesConsumer>
        )
    }
}
