import React, { Component } from 'react'
import GameApiServiceObject from '../services/game-api-service';
import FolderApiServiceObject from '../services/folder-api-service';
import {withRouter} from 'react-router-dom'
import AuthApiServiceObject from '../services/auth-api-service';
import { platformStore } from '../store';
import { genreStore } from '../store';
import UsersApiServiceObject from '../services/users-api-service';

export const GamesContext = React.createContext();

class GamesProvider extends Component {

    static defaultProps = {
        history: {
            push: () => {}
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            games: [],
            userGames: [],
            isLoading: false,
            justSignedUp: true,
            userId: null,
            folders: [],
            platformFilters: [],
            genreFilters: [],
            reviewFilter: null,
            openFolderId: null,
            openFolder: null,
            addFolder: false,
            folderGames: [],
            gameTitleToAdd: null,
            gameIdToAdd: null,
            folderToAddTo: null,
            currentUser: null,
            isLoading: false,
            profileUrl: null,
            focusedFolder: null,
            successMessage: false,
            noResults: false,
        }
    };

    setCurrentUser = (user_name) => {
        this.setState({
            currentUser: user_name,
        });

        sessionStorage.setItem('current-user', user_name);
    }

    setNewGames = (games) => {
        console.log(games);
        this.setState({
            games
        });

        this.toggleLoading();
    };

    handleFolderSubmit = (newFolder) => {
        console.log('here');
        this.setState({

        })
    };

    getUserGames = (userId) => {
        GameApiServiceObject.getGames(userId)
            .then(games => this.setUserGames(games))
    }

    setFolders = (userId) => {
        FolderApiServiceObject.getFolders(userId)
            .then(foldersRes => {
                this.setState({
                    folders: foldersRes
                })
            })
    };

    setNewFolder = (newFolder) => {
        this.setState({
            folders: [...this.state.folders, newFolder]
        });

        FolderApiServiceObject.postFolder(newFolder.name, newFolder.user_id)
    }

    setUserGames = (games) => {
        console.log('here');
        this.setState({
            userGames: games,
            currentUser: sessionStorage.getItem('current-user')
        })
    }

    handleAddFolderClick = (gameTitle, gameId) => {
        this.setState({
            addFolder: true,
            gameTitleToAdd: gameTitle,
            gameIdToAdd: gameId,
        });

    };

    addToFolder = (folderId, folderName) => {
        this.setState({
            folderToAddTo: folderId,
            focusedFolder: folderName,
            addFolder: false,
            successMessage: true
        }, () => {
            setTimeout(() => {
                this.setState({
                    successMessage: false,
                })
            }, 2000);
        });

        GameApiServiceObject.postGame(this.state.gameTitleToAdd, this.state.gameIdToAdd, folderId)

    }

    closeWindow = () => {
        this.setState({
            addFolder: false,
            gameIdToAdd: null,
            gameTitleToAdd: null,
        })
    }

    deleteFolder = (deleteId) => {
        const afterDeleteFolders = this.state.folders.filter(fldr =>
            fldr.id !== deleteId);
        this.setState({
            folders: afterDeleteFolders
        });
        FolderApiServiceObject.deleteFolder(deleteId);
    }

    setOpenFolder = (folderId) => {
        this.setState({
            openFolderId: folderId,
        });

        FolderApiServiceObject.getById(folderId)
            .then(folder => {
                this.setState({
                    openFolder: folder,
                })
            })
    }

    handlePlatformChange = (e) => {

        let platform = e.target.value;

        let platformId;

        for(let i = 0; i < platformStore.length; i++) {
            if(platformStore[i].name == platform) {
                platformId = platformStore[i].id;
            }
        }

        if (!this.state.platformFilters.includes(platformId)) {
            this.state.platformFilters.push(platformId);
        } else {
            this.state.platformFilters.splice(this.state.platformFilters.indexOf(platformId), 1)
        }

        console.log(this.state.platformFilters)
    };

    handleGenreChange = (e) => {
        let genre = e.target.value;

        let genreId;

        for(let i = 0; i < genreStore.length; i++) {

            if (genreStore[i].name == genre) {
                genreId = genreStore[i].id;
            } 
        };

        if (!this.state.genreFilters.includes(genreId)) {
            this.state.genreFilters.push(genreId);
        } else {
            this.state.genreFilters.splice(this.state.genreFilters.indexOf(genreId), 1)
        };

        console.log(this.state.genreFilters);
    };

    handleReviewChange = (e) => {
        this.setState({
            reviewFilter: e.target.value
        })
    };

    toggleLoading = () => {
        this.setState({
            isLoading: !this.state.isLoading
        })
    };

    toggleCompleted = (toggleId, userId) => {
        this.state.userGames.map((game, i) => {
            if (game.id == toggleId) {

                game.completed = !game.completed;

                GameApiServiceObject.toggleCompleted(toggleId, !game.completed)
/*                     .then(this.getUserGames(userId)) */
            };
        });
    };

    setUserImage = (url) => {
        let userId = sessionStorage.getItem('user-id');
        this.setState({
            profileUrl: url,
        });

        UsersApiServiceObject.setProfileImage(url, userId);
    };

    handleSignOut = (e) => {
        sessionStorage.removeItem('user-id');

        sessionStorage.removeItem('game-galaxy-token-key');

        sessionStorage.removeItem('current-user');

        this.setState({
            justSignedUp: false,
            currentUser: null
        })
    };

    handleSignUp = () => {

    }

    toggleJustSignedUp = () => {
        this.setState({
            justSignedUp: false,
        })
    }

    toggleNoResuts = () => {
        this.setState({
            noResults: !this.state.noResults
        })
    }

    render() {

        const contextValue = {
            handleSignUp: this.handleSignUp,
            justSignedUp: this.state.justSignedUp,
            handleGamesSearch: this.handleGamesSearch,
            handleFolderSubmit: this.handleFolderSubmit,
            setUserId: this.setUserId,
            userId: this.state.userId,
            folders: this.state.folders,
            getFolders: this.getFolders,
            getUserGames: this.getUserGames,
            openFolder: this.state.openFolder,
            handlePlatformChange: this.handlePlatformChange,
            handleGenreChange: this.handleGenreChange,
            handleReviewChange: this.handleReviewChange,
            setNewGames: this.setNewGames,
            games: this.state.games,
            platformFilters: this.state.platformFilters,
            genreFilters: this.state.genreFilters,
            reviewFilter: this.state.reviewFilter,
            setOpenFolder: this.setOpenFolder,
            folderGames: this.state.folderGames,
            deleteFolder: this.deleteFolder,
            handleAddFolderClick: this.handleAddFolderClick,
            addFolder: this.state.addFolder,
            closeWindow: this.closeWindow,
            addToFolder: this.addToFolder,
            folderToAddTo: this.state.folderToAddTo,
            userGames: this.state.userGames,
            setCurrentUser: this.setCurrentUser,
            currentUser: this.state.currentUser,
            setFolders: this.setFolders,
            setNewFolder: this.setNewFolder,
            toggleLoading: this.toggleLoading,
            isLoading: this.state.isLoading,
            toggleCompleted: this.toggleCompleted,
            setUserImage: this.setUserImage,
            profileUrl: this.state.profileUrl,
            handleSignOut: this.handleSignOut,
            toggleJustSignedUp: this.toggleJustSignedUp,
            focusedFolder: this.state.focusedFolder,
            successMessage: this.state.successMessage,
            noResults: this.state.noResults,
            toggleNoResults: this.toggleNoResuts,

        }

        return (
            <GamesContext.Provider
                value={contextValue}
            >
                {this.props.children}
            </GamesContext.Provider>
        )
    }
}

export default withRouter(GamesProvider);

export const GamesConsumer = GamesContext.Consumer;
