import React, { Component } from 'react';
import styles from './styles.module.css';

export default class FolderGame extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className={styles.folderGameHolder}>
                <h1 className={styles.folderGameName}>{this.props.title}</h1>
            </div>
        )
    }
}
