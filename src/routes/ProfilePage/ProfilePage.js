import React, { Component } from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import FolderDisplay from '../../components/FolderDisplay/FolderDisplay';
import FolderGamesDisplay from '../../components/FolderGamesDisplay/FolderGamesDisplay';
import { GamesConsumer, GamesContext } from '../../contexts/GamesContext';
import ProfileImage from '../../components/ProfileImage/ProfileImage';
import ImageUpload from '../../components/ImageUpload/ImageUpload';

export default class ProfilePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            addFolder: false,
        }
    };

    static contextType = GamesContext;

    parseJwt = (token) => {
        let base64Url = token.split('.')[1];
        let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        let jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    };

    componentDidMount() {
        document.title = "Profile Page";

        document.title = "Search Page";

        const token = sessionStorage.getItem('game-galaxy-token-key');
        let payload = this.parseJwt(token);
        let userId = payload.user_id;

        sessionStorage.setItem('user-id', userId);

        this.context.getUserGames(userId);
    }

    handleAddFolderClick = () => {
        this.setState({
            addFolder: !this.state.addFolder
        })
    }

    render() {
        return (
            <GamesConsumer>
                {value => (
                    <>
                        <nav className={styles.nav} role="navigation">
                            <Link to="/">
                                <p className={styles.signOut} onClick={(e) => this.context.handleSignOut(e)}>Sign Out</p>
                            </Link>

                            <Link to="/search">
                                <p className={styles.returnToSearch}>Back to Search</p>
                            </Link>
                        </nav>
                        <main className={styles.main} role="main">

                            <section className={styles.profileSection} role="banner">
                                <div role="presentation" className={styles.profileMain}>
                                    <p className={styles.userName}>{value.currentUser}</p>

                                    <ProfileImage />

                                    <ImageUpload />
                                </div>

                                <FolderDisplay />

                                <FolderGamesDisplay />

                            </section>

                        </main>
                        <footer className={styles.footer} role="content-info">Footer</footer>
                    </>
                )}
                
            </GamesConsumer>     
        )
    }
}
