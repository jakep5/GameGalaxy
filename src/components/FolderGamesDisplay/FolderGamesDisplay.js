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
                            
                            
                            {value.openFolder == null
                            ?   <>
                                    <h1 className={styles.itemsLabel}>Games</h1>
                                    <h2 className={styles.mustOpenFolder}>No folder open</h2>
                                </>
                            :   
                                <h1 className={styles.itemsLabel}>Games in '{value.openFolder.name}'</h1>
                            }
                            
                            {value.userGames.map(game => {
                                if(value.openFolder === null) {
                                    return null;
                                } else if (game.folder_id === value.openFolder.id) { 
                                    return <FolderGame
                                        title={game.title}
                                        completed={game.completed}
                                        igdbId={game.igdb_id}
                                        gameId={game.id}
                                    />
                                }
                                return null;
                            })}
                        </div>
                )}
            </GamesConsumer>
            
        );
    };
};
