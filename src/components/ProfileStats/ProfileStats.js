import React, { Component } from 'react';
import styles from './styles.module.css';
import { GamesContext, GamesConsumer } from '../../contexts/GamesContext';

export default class ProfileStats extends Component {

    static contextType = GamesContext;

    getCompletedGamesCount = () => {

        let count = 0;

        this.context.userGames.map(game => {
            if (game.completed == true) {
                count += 1;
            }
        })

        return count;
    }
    
    render() {

        let count = this.getCompletedGamesCount();
        
        return (
            <GamesConsumer>
                {value => (
                    <div className={styles.profileStats}>
                        <p className={styles.gamesSaved}>
                            Games saved: 
                            <p className={styles.gamesSavedCount}>{value.userGames.length}</p>
                        </p> 
                        <p className={styles.gamesCompleted}>
                            Games completed:
                            <p className={styles.gamesCompletedCount}>{count}</p>
                        </p>
                    </div>
                )}
            </GamesConsumer>
            
        )
    }
}
