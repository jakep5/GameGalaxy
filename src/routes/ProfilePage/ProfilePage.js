import React, { Component } from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

export default class ProfilePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            addFolder: false,
        }
    }

    componentDidMount() {
        document.title = "Profile Page"
    }

    handleAddFolderClick = () => {
        this.setState({
            addFolder: !this.state.addFolder
        })
    }

    render() {
        return (
            <>
                <nav className={styles.nav} role="navigation">
                    <Link to="/">
                        <p className={styles.signOut}>Sign Out</p>
                    </Link>
                    
                    <Link to="/search">
                        <p className={styles.returnToSearch}>Back to Search</p>
                    </Link>
                </nav>
                <main className={styles.main} role="main">

                    <section className={styles.profileSection} role="banner">
                        <div role="presentation" className={styles.profileMain}>
                            <p className={styles.userName}>jakepagel1</p>
                            <div className={styles.profileImage}>
                                Image goes here
                            </div>
                        </div>

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

                        <div className={styles.itemsHolder}>
                            <h1 className={styles.itemsLabel}>Games</h1>
                        </div>
                    </section>

                </main>
                <footer className={styles.footer} role="content-info">Footer</footer>
            </>
        )
    }
}
