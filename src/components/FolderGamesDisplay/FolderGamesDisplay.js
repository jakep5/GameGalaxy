import React, { Component } from 'react';
import styles from './styles.module.css';
import { GamesConsumer } from '../../contexts/GamesContext';
import { GamesContext } from '../../contexts/GamesContext';
import FolderGame from '../FolderGame/FolderGame';

export default class FolderGamesDisplay extends Component {

    static contextType = GamesContext;

    render() {

        
        return (
            <GamesConsumer>
                {value => (
                        <div className={styles.itemsHolder}>
                            <h1 className={styles.itemsLabel}>Games</h1>
                            {value.openFolder == null
                            ?   <h1 className={styles.mustOpenFolder}>No folder open</h1>
                            :   <h1 className={styles.folderName}>Open folder: {value.openFolder.name}</h1>
                            }
                            
                            {value.userGames.map(game => {
                                if(value.openFolder == null) {
                                    return null;
                                } else if (game.folder_id == value.openFolder.id) { 
                                    return <FolderGame
                                        title={game.title}
                                        completed={game.completed}
                                        igdbId={game.igdb_id}
                                        gameId={game.id}
                                    />
                                }
                                })
                            }
                        </div>
                )}
            </GamesConsumer>
            
        )
    }
}
