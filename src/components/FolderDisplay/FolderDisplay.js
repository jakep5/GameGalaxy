import React, { Component } from 'react';
import styles from './styles.module.css'
import { GamesContext, GamesConsumer } from '../../contexts/GamesContext';


export default class FolderDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            addFolder: false,
            userFolders: [],
            folderName: '',
            width: 0,
            height: 0
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

    };
    
    static contextType = GamesContext;

    componentDidMount = () => {
        let userId = sessionStorage.getItem('user-id');

        this.updateWindowDimensions();

        window.addEventListener('resize', this.updateWindowDimensions);


        this.context.setFolders(userId);
    };

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    };

    updateWindowDimensions() {
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight
        })
    };
    
    /*Toggle display of input field for adding a new folder */
    handleAddFolderClick = () => {
        this.setState({
            addFolder: !this.state.addFolder,
        });
    };
    /**/ 

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

    openFolderAndScroll = (e) => {
        e.preventDefault();

        let openId = e.target.getAttribute('name');

        let element = document.getElementById('itemsHolder');

        element.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        this.context.setOpenFolder(openId);

    }

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
                    <div className={styles.folderHolder} role='contentinfo'>
                        <p className={styles.folderLabel}>My folders (click title to open)</p>
                        <ul className={styles.folderList}>
                            {value.folders == null
                            ? <p className={styles.noFolders}>No folders currently added</p>
                            : value.folders.map(folder => {
                                return (
                                <>
                                    {this.state.width <= 1080 
                                    ?<li name={folder.id} id={folder.name} onClick={(e) => this.openFolderAndScroll(e)} className={styles.folderItem}>{folder.name}</li>
                                    :<li name={folder.id} id={folder.name} onClick={(e) => this.openFolder(e)} className={styles.folderItem}>{folder.name}</li>

                                    }
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
                        <button onClick={this.handleAddFolderClick} className={styles.addFolderButton} id='addFolderButton'>Add folder</button>

                        <div className={styles.addFolderHolder} role='form'>
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
