import React, { Component } from 'react'
import GameApiServiceObject from '../services/game-api-service';
import FolderApiServiceObject from '../services/folder-api-service';
import TokenServiceObject from '../services/token-service';
import config from '../config';
import {withRouter} from 'react-router-dom';
import { platformStore } from '../store';
import { genreStore } from '../store';

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
            games: null,
            userGames: [],
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

    /*Set current user to display in profile*/
    setCurrentUser = (user_name) => {
        this.setState({
            currentUser: user_name,
        });
        sessionStorage.setItem('current-user', user_name);
    };
    /**/

    setNewGames = (games) => {
        this.setState({
            games
        });
        this.toggleLoading();
    };

    getUserGames = (userId) => {
        GameApiServiceObject.getGames(userId)
            .then(games => this.setUserGames(games))
    };

    setFolders = (userId) => {
        FolderApiServiceObject.getFolders(userId)
            .then(foldersRes => {
                this.setState({
                    folders: foldersRes
                })
            });
    };
    
    addNewFolder = (newFolder) => {
        const userId = parseInt(newFolder.user_id);

        const folderToAdd = {
            name: newFolder.name,
            user_id: userId
        };

        this.setState({
            folders: [...this.state.folders, folderToAdd] 
        });

        let token = TokenServiceObject.getAuthToken();

        return fetch(`${config.API_BASE_URL}/folders`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `bearer ${token}`
            },
            body: JSON.stringify({
                name: newFolder.name,
                user_id: newFolder.user_id,
            })
        })
            
            .then(res => {
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : this.setFolders(sessionStorage.getItem('user-id'));
            })      
    };

    setUserGames = (games) => {
        this.setState({
            userGames: games,
            currentUser: sessionStorage.getItem('current-user')
        });
    };

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

        GameApiServiceObject.postGame(this.state.gameTitleToAdd, this.state.gameIdToAdd, folderId);
    };

    closeWindow = () => {
        this.setState({
            addFolder: false,
            gameIdToAdd: null,
            gameTitleToAdd: null,
        });
    };

    deleteFolder = (deleteId) => {
        const afterDeleteFolders = this.state.folders.filter(fldr =>
            fldr.id !== parseInt(deleteId));
        this.setState({
            folders: afterDeleteFolders
        });
        FolderApiServiceObject.deleteFolder(deleteId);
    };

    deleteGame = (gameId) => {
        const afterDeleteGames = this.state.userGames.filter(gme => 
            gme.id !== parseInt(gameId));
        this.setState({
            userGames: afterDeleteGames
        });
        GameApiServiceObject.deleteGame(gameId);
    };

    setOpenFolder = (folderId) => {
        this.setState({
            openFolderId: folderId,
        });

        FolderApiServiceObject.getById(folderId)
            .then(folder => {
                this.setState({
                    openFolder: folder,
                })
            });
    };

    handlePlatformChange = (e) => {
        let platform = e.target.value;

        let platformId;

        for(let i = 0; i < platformStore.length; i++) {
            if(platformStore[i].name === platform) {
                platformId = platformStore[i].id;
            }
        };

        if (!this.state.platformFilters.includes(platformId)) {
            this.state.platformFilters.push(platformId);
        } else {
            this.state.platformFilters.splice(this.state.platformFilters.indexOf(platformId), 1)
        };
    };

    handleGenreChange = (e) => {
        let genre = e.target.value;

        let genreId;

        for(let i = 0; i < genreStore.length; i++) {

            if (genreStore[i].name === genre) {
                genreId = genreStore[i].id;
            }
        };

        if (!this.state.genreFilters.includes(genreId)) {
            this.state.genreFilters.push(genreId);
        } else {
            this.state.genreFilters.splice(this.state.genreFilters.indexOf(genreId), 1);
        };

    };

    handleReviewChange = (e) => {
        this.setState({
            reviewFilter: e.target.value
        });
    };

    toggleLoading = () => {
        this.setState({
            isLoading: !this.state.isLoading
        });
    };

    toggleCompleted = (toggleId) => {

        let intToggleId = parseInt(toggleId);

        this.setState({
            userGames: this.state.userGames.map(game => 
                game.id === intToggleId ? {...game, completed: !game.completed} : game)
        });

        this.state.userGames.map((game) => {
            if (game.id === intToggleId) {

                game.completed = !game.completed;

                GameApiServiceObject.toggleCompleted(intToggleId, game.completed);
            };

            return null;
        });
    };

    handleSignOut = (e) => {
        sessionStorage.removeItem('user-id');

        sessionStorage.removeItem('game-galaxy-token-key');

        sessionStorage.removeItem('current-user');

        this.setState({
            justSignedUp: false,
            currentUser: null
        });
    };

    /*Toggle display of 'thanks for signing up' message on sign in form*/
    toggleJustSignedUp = () => {
        this.setState({
            justSignedUp: false,
        });
    };
    /**/


    /*Clear search results when search form is submitted*/
    clearSearchResults = () => {
        this.setState({
            games: []
        });
    };
    /**/

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
            addNewFolder: this.addNewFolder,
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
            deleteGame: this.deleteGame,
            clearSearchResults: this.clearSearchResults
        }

        return (
            <GamesContext.Provider
                value={contextValue}
            >
                {this.props.children}
            </GamesContext.Provider>
        )
    }
};

export default withRouter(GamesProvider);

export const GamesConsumer = GamesContext.Consumer;
