import React, { Component } from 'react';
import styles from './styles.module.css';
import { GamesContext, GamesConsumer } from '../../contexts/GamesContext';
import CompletedIcon from '../CompletedIcon/CompletedIcon';

export default class FolderGame extends Component {

    static contextType = GamesContext;

    deleteGame = (e) => {
        e.preventDefault();

        let deleteId = e.target.getAttribute('name');

        this.context.deleteGame(deleteId);
    };

    handleCheckCompleted = (e) => {
        e.preventDefault();

        let toggleId = e.target.getAttribute('name');

        let userId = sessionStorage.getItem('user-id');

        this.context.toggleCompleted(toggleId, userId);
    };
    
    render() {
        return (
            <GamesConsumer>
                {value => (
                    <div className={styles.folderGameHolder}>
                        <h1 className={styles.folderGameName}>{this.props.title}</h1>
                        <button className={styles.deleteGameButton} name={this.props.gameId} onClick={(e) => this.deleteGame(e)}>Delete</button>
                        <button className={styles.completeButton} name={this.props.gameId} onClick={(e) => this.handleCheckCompleted(e)}>Mark as Completed</button>

                        {this.props.completed
                        ? <CompletedIcon className={styles.completedIcon}/>
                        : null}
                    </div>
                )}
            </GamesConsumer>                 
        );
    };
};
