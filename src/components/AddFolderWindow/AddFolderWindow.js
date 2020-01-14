import React, { Component } from 'react';
import styles from './styles.module.css';
import FolderApiServiceObject from '../../services/folder-api-service';
import { GamesConsumer } from '../../contexts/GamesContext';

export default class AddFolderWindow extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <GamesConsumer>
                {value => (
                    <div className={styles.addFolderWindow}>
                        {value.folders.map(folder => {
                            return <p className={styles.folderTitle}>{folder.name}</p>
                        })}
                    </div>
                )}
            </GamesConsumer>
            
        )
    }
}
