import React, { Component } from 'react';
import styles from './styles.module.css';
import { GamesContext, GamesConsumer } from '../../contexts/GamesContext';
import CompletedIcon from '../CompletedIcon/CompletedIcon';

export default class FolderGame extends Component {

    static contextType = GamesContext;

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
                        <button 
                            className={styles.deleteGameButton} 
                            name={this.props.gameId} 
                            onClick={() => {
                                if (window.confirm(`Are you sure you wish to delete ${this.props.title}?`)) 
                                    value.deleteGame(this.props.gameId)
                            }}
                        >
                            Delete
                        </button>
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
