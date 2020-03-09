import React, { Component } from 'react';
import styles from './styles.module.css';
import FolderDisplay from '../../components/FolderDisplay/FolderDisplay';
import FolderGamesDisplay from '../../components/FolderGamesDisplay/FolderGamesDisplay';
import { GamesConsumer, GamesContext } from '../../contexts/GamesContext';
import ProfileNav from '../../components/ProfileNav/ProfileNav'
import ProfileStats from '../../components/ProfileStats/ProfileStats';

export default class ProfilePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            addFolder: false,
        }
    };

    static contextType = GamesContext;

    componentDidMount = () => {
        document.title = "Profile Page";

        let userId = sessionStorage.getItem('user-id');

        this.context.getUserGames(userId);
    };

    handleAddFolderClick = () => {
        this.setState({
            addFolder: !this.state.addFolder
        })
    };

    render() {
        return (
            <GamesConsumer>
                {value => (
                    <>
                        <ProfileNav />

                        <main className={styles.main} role="main">

                            <section className={styles.profileSection} role="banner">
                                <div role="presentation" className={styles.profileMain}>
                                    <h1 className={styles.userName}>{value.currentUser}</h1>
                                </div>

                                <ProfileStats />

                                <FolderDisplay />

                                <FolderGamesDisplay />

                            </section>

                        </main>
                    </>
                )}
            </GamesConsumer>     
        );
    };
};
