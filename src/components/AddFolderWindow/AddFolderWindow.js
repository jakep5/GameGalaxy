import React, { Component } from 'react';
import styles from './styles.module.css';
import FolderApiServiceObject from '../../services/folder-api-service';
import { GamesConsumer } from '../../contexts/GamesContext';
import { GamesContext } from '../../contexts/GamesContext';

export default class AddFolderWindow extends Component {

    constructor(props) {
        super(props);
    }

    static contextType = GamesContext;

    addToFolder = (e) => {
        let folderId = e.target.getAttribute('id');

        let folderName = e.target.getAttribute('name');

        this.context.addToFolder(folderId, folderName);
    }

    closeWindow = (e) => {
        this.context.closeWindow();
    }

    render() {
        return (
            <GamesConsumer>
                {value => (
                    <div className={styles.addFolderWindow}>
                        <button onClick={(e) => this.closeWindow(e)} className={styles.closeWindow}>X</button>
                        <h1 className={styles.addFolderHeader}>Choose folder to add this game to:</h1>

                        {value.folders == []
                        ? <p className={styles.noFolders}>No folders added</p>
                        : value.folders.map(folder => {
                            return <p onClick={(e) => this.addToFolder(e)} id={folder.id} name={folder.name} className={styles.folderTitle}>{folder.name}</p>
                        })
                        }
                    </div>
                )}
            </GamesConsumer>
            
        )
    }
}
