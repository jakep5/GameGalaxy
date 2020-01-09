import React, { Component } from 'react';
import styles from './styles.module.css'
import { GamesContext } from '../../contexts/GamesContext';
import FolderApiServiceObject from '../../services/folder-api-service';

export default class FolderDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            addFolder: false,
        }
    }
    
    static contextType = GamesContext;

    componentDidMount = () => {
        let userId = this.context.userId;

        console.log(userId);

        this.context.getFolders();
    }

    handleAddFolderClick = () => {
        this.setState({
            addFolder: !this.state.addFolder,
            folders: this.context.folders
        })
    }

    handleFolderSubmit = (e) => {
        e.preventDefault();

        let folderName = document.getElementById('folderName').value;
        let user_id = this.context.userId;

        FolderApiServiceObject.postFolder(folderName, user_id)

        this.context.handleFolderSubmit(folderName);
    }


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

                <div className={styles.addFolderHolder}>
                    {this.state.addFolder && 
                    <form onSubmit={(e) => this.handleFolderSubmit(e)} id="addFolder">
                        <label className={styles.addFolderLabel} htmlFor="folderName">Folder name:</label>
                        <input name="folderName" id="folderName" type="text"></input>
                    </form>}
                </div>
                
            </div>
        )
    }
}
