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
                            :   <h1 className={styles.folderName}>{value.openFolder.name}</h1>
                            }
                            
                            {/* {value.folderGames == null
                            ?   <h1 className={styles.noFolders}>You have no folders added</h1>
                            :   
                            value.folderGames.map(game => {
                                return (
                                    <>
                                         

                                        <FolderGame
                                                    folderId={game.id}
                                                    folderName={game.name}
                                        />
                                    </>
                                )
                            }) */}
                            
                            
                        </div>
                )}
            </GamesConsumer>
            
        )
    }
}
