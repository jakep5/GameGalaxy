import React, { Component } from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import FolderDisplay from '../../components/FolderDisplay/FolderDisplay';
import FolderGamesDisplay from '../../components/FolderGamesDisplay/FolderGamesDisplay';

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

                        <FolderDisplay />

                        <FolderGamesDisplay />
                        
                    </section>

                </main>
                <footer className={styles.footer} role="content-info">Footer</footer>
            </>
        )
    }
}
