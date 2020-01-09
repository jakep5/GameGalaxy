import React, { Component } from 'react';
import styles from './styles.module.css'

export default class FolderDisplay extends Component {
    render() {
        return (
            <div className={styles.folderHolder}>
                <p className={styles.folderLabel}>My folders</p>
                <ul className={styles.folderList}>
                    <li className={styles.folderItem}>Folder 1</li>
                    <li className={styles.folderItem}>Folder 2</li>
                    <li className={styles.folderItem}>Folder 3</li>
                    <li className={styles.folderItem}>Folder 4</li>
                </ul>
                <button onClick={this.handleAddFolderClick} className={styles.addFolderButton}>Add folder</button>
            </div>
        )
    }
}
