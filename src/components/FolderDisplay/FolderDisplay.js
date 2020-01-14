import React, { Component } from 'react';
import styles from './styles.module.css'
import { GamesContext, GamesConsumer } from '../../contexts/GamesContext';
import FolderApiServiceObject from '../../services/folder-api-service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'; 


export default class FolderDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            addFolder: false,
        }
    }
    
    static contextType = GamesContext;

    componentDidMount = () => {
        let userId = sessionStorage.getItem('user-id');
        this.context.getFolders(userId);
    }

    handleAddFolderClick = () => {
        this.setState({
            addFolder: !this.state.addFolder,
        })
    }

    handleFolderSubmit = (e) => {
        e.preventDefault();

        let folderName = document.getElementById('folderName').value;
        let user_id = sessionStorage.getItem('user-id');

        FolderApiServiceObject.postFolder(folderName, user_id)
            .then(this.context.getFolders(user_id))
    }

    openFolder = (e) => {
        e.preventDefault();

        let openId = e.target.getAttribute('name');

        this.context.setOpenFolder(openId);

/*         let folderId = document.getElementById(e.target.)
 */
/*         this.context.setOpenFolder()
*/    }

    deleteFolder = (e) => {
        e.preventDefault();

        let userId = sessionStorage.getItem('user-id');

        let deleteId = e.target.getAttribute('name');

        FolderApiServiceObject.deleteFolder(deleteId)
            .then(this.context.getFolders(userId))
    }


    render() {
        return (
            <GamesConsumer>
                {value => (
                    <div className={styles.folderHolder}>
                        <p className={styles.folderLabel}>My folders</p>
                        <ul className={styles.folderList}>
                            {value.folders == null
                            ? <p className={styles.noFolders}>No folders currently added</p>
                            : value.folders.map(folder => {
                                return (
                                <>
                                    <li name={folder.id} id={folder.name} onClick={(e) => this.openFolder(e)} className={styles.folderItem}>{folder.name}</li>
                                    <button name={folder.id} onClick={(e) => this.deleteFolder(e)} className={styles.deleteFolder}>Delete</button>
                                </> 
                                )
                            })
                            }
                        </ul>
                        <button onClick={this.handleAddFolderClick} className={styles.addFolderButton}>Add folder</button>

                        <div className={styles.addFolderHolder}>
                            {this.state.addFolder && 
                            <form onSubmit={(e) => this.handleFolderSubmit(e)} id="addFolder">
                                <label className={styles.addFolderLabel} htmlFor="folderName">Folder name:</label>
                                <input name="folderName" id="folderName" type="text"></input>
                                <button type="submit" className={styles.addFolderButton} htmlFor="addFolder">Submit</button>
                            </form>}
                            
                        </div>
                        
                    </div>
                )}
            </GamesConsumer>
        )
    }
}
