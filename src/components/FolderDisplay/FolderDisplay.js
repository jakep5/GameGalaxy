import React, { Component } from 'react';
import styles from './styles.module.css'
import { GamesContext, GamesConsumer } from '../../contexts/GamesContext';


export default class FolderDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            addFolder: false,
            userFolders: [],
            folderName: ''
        };
    };
    
    static contextType = GamesContext;

    componentDidMount = () => {
        let userId = sessionStorage.getItem('user-id');

        this.context.setFolders(userId);
    };
    
    handleAddFolderClick = () => {
        this.setState({
            addFolder: !this.state.addFolder,
        });
    };

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

    openFolder = (e) => {
        e.preventDefault();

        let openId = e.target.getAttribute('name');

        this.context.setOpenFolder(openId);
    };

    handleInputChange = (e) => {
        this.setState({
            folderName: e.target.value,
        })
    };

    //handlechange = ev => this.setState({
    //    text: ev.target.value
    //})


    render() {

        return (
            <GamesConsumer>
                {value => (
                    <div className={styles.folderHolder}>
                        <p className={styles.folderLabel}>My folders (click title to open)</p>
                        <ul className={styles.folderList}>
                            {value.folders == null
                            ? <p className={styles.noFolders}>No folders currently added</p>
                            : value.folders.map(folder => {
                                return (
                                <>
                                    <li name={folder.id} id={folder.name} onClick={(e) => this.openFolder(e)} className={styles.folderItem}>{folder.name}</li>
                                    <button 
                                        name={folder.id} 
                                        onClick={() => { 
                                            if (window.confirm(`Are you sure you wish to delete ${folder.name} and all of its contents?`))
                                                value.deleteFolder(folder.id)
                                        }}
                                        className={styles.deleteFolder}
                                    >
                                        Delete
                                    </button>
                                </> 
                                )
                            })
                            }
                        </ul>
                        <button onClick={this.handleAddFolderClick} className={styles.addFolderButton}>Add folder</button>

                        <div className={styles.addFolderHolder}>
                            {this.state.addFolder && 
                            <form onSubmit={(e) => this.handleFolderSubmit(e)} id='addFolder'>
                                <label className={styles.addFolderLabel} htmlFor='folderName'>Folder name:</label>
                                <input 
                                    value={this.state.folderName} 
                                    onChange={(e) => this.handleInputChange(e)} 
                                    name='folderName' 
                                    className={styles.newFolderInput} 
                                    id='folderName' 
                                    type='text' 
                                    required>
                                </input>
                                <button type='submit' className={styles.submitFolderButton} htmlFor='addFolder'>Submit</button>
                            </form>}
                            
                        </div>
                        
                    </div>
                )}
            </GamesConsumer>
        );
    };
};
