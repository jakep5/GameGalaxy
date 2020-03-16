import React, { Component } from 'react';
import styles from './styles.module.css';
import { GamesConsumer } from '../../contexts/GamesContext';
import { GamesContext } from '../../contexts/GamesContext';

export default class AddFolderWindow extends Component {

    static contextType = GamesContext;

    constructor(props) {
        super(props) 
        this.state = {
            folderName: '',
            addNewFolder: false,
        }
    }

    addToFolder = (e) => {
        let folderId = e.target.getAttribute('id');

        let folderName = e.target.getAttribute('name');

        this.context.addToFolder(folderId, folderName);
    }

    closeWindow = (e) => {
        this.context.closeWindow();
    }

    handleFolderSubmit = (e) => {
        e.preventDefault();

        let folderName = this.state.folderName;

        let userId = sessionStorage.getItem('user-id');

        let newFolder = {
            name: folderName,
            user_id: userId
        };

        this.context.addNewFolder(newFolder);
    }


    /*Toggle display of popup window to add game to folder */
    toggleAddFolder = () => {
        this.setState({
            addNewFolder: !this.state.addNewFolder
        })
    }
    /**/

    handleInputChange = (e) => {
        this.setState({
            folderName: e.target.value,
        })
    }

    render() {
        return (
            <GamesConsumer>
                {value => (
                    <div className={styles.addFolderWindow}>
                        <button onClick={(e) => this.closeWindow(e)} className={styles.closeWindow}>X</button>
                        <h1 className={styles.addFolderHeader}>Choose folder to add this game to:</h1>

                        {value.folders.length === 0
                        ?   <>
                                <p className={styles.noFolders}>No folders added. Add one?</p>
                                <form onSubmit={(e) => this.handleFolderSubmit(e)} className={styles.addFolderSecondary} id='addFolderSecondary'>
                                    <label htmlFor='addFolderSecondary' className={styles.addFolderSecondaryLabel}>Folder name:</label>
                                    <input
                                        value={this.state.folderName}
                                        onChange={(e) => this.handleInputChange(e)}
                                        name='folderName'
                                        className={styles.addFolderSecondaryInput}
                                        type='text'
                                        required
                                    >
                                    </input>
                                    <button type='submit' htmlFor='addFolderSecondary' className={styles.submitFolderButton}>Submit</button>
                                </form> 
                            </>
                            
                        : value.folders.map(folder => {
                            return <p onClick={(e) => this.addToFolder(e)} id={folder.id} name={folder.name} className={styles.folderTitle}>{folder.name}</p>
                        })
                        }

                        <button onClick={this.toggleAddFolder} className={styles.toggleAddFolder}>Add folder</button>

                        {this.state.addNewFolder &&
                            <div className={styles.addFolderHolder}>
                                <form onSubmit={(e) => this.handleFolderSubmit(e)} className={styles.addFolderSecondary} id='addFolderSecondary'>
                                    <label htmlFor='addFolderSecondary' className={styles.addFolderSecondaryLabel}>Folder name:</label>
                                    <input
                                        value={this.state.folderName}
                                        onChange={(e) => this.handleInputChange(e)}
                                        name='folderName'
                                        className={styles.addFolderSecondaryInput}
                                        type='text'
                                        required
                                    >
                                    </input>
                                    <button type='submit' htmlFor='addFolderSecondary' className={styles.submitFolderButton}>Submit</button>
                                </form> 
                            </div>
                        }
                    </div>
                )}
            </GamesConsumer>
            
        )
    }
}
