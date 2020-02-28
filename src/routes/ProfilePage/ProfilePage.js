import React, { Component } from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import FolderDisplay from '../../components/FolderDisplay/FolderDisplay';
import FolderGamesDisplay from '../../components/FolderGamesDisplay/FolderGamesDisplay';
import { GamesConsumer, GamesContext } from '../../contexts/GamesContext';
import ProfileImage from '../../components/ProfileImage/ProfileImage';
import ProfileNav from '../../components/ProfileNav/ProfileNav'
import ImageUpload from '../../components/ImageUpload/ImageUpload';

export default class ProfilePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            addFolder: false,
        }
    };

    static contextType = GamesContext;

    

    componentDidMount() {
        document.title = "Profile Page";

        let userId = sessionStorage.getItem('user-id');

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
                        <ProfileNav />

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
