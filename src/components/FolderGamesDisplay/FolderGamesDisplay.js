import React, { Component } from 'react';
import styles from './styles.module.css';

export default class FolderGamesDisplay extends Component {

    render() {
        return (
            <div className={styles.itemsHolder}>
                <h1 className={styles.itemsLabel}>Games</h1>
            </div>
        )
    }
}
