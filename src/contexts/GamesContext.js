import React, { Component } from 'react'
import GameApiServiceObject from '../services/game-api-service';
import FolderApiServiceObject from '../services/folder-api-service';
import {withRouter} from 'react-router-dom'
import AuthApiServiceObject from '../services/auth-api-service';
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
            isLoading: false,
            justSignedUp: false,
            userId: null,
            folders: null,
            platformFilters: [],
            genreFilters: [],
            reviewFilter: null,
            openFolderId: null,
            openFolder: null,
            folderGames: [],
        }
    };

    setNewGames = (games) => {
        console.log(games);
        this.setState({
            games
        })
    };

    handleFolderSubmit = (newFolder) => {
        console.log('here');
        this.setState({

        })
    };

    getFolders = (userId) => {
        FolderApiServiceObject.getFolders(userId)
            .then(folders => this.setNewFolders(folders))
    };

    setNewFolders = (folders) => {
        this.setState({
            folders: folders
        })
    };

    deleteFolder = (deleteId) => {
        
    }

    setOpenFolder = (folderId) => {
        this.setState({
            openFolderId: folderId
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
            if(genreStore[i].genre == genre) {
                genreId = genreStore[i].id;
            }
        }

        if (!this.state.genreFilters.includes(genreId)) {
            this.state.genreFilters.push(genreId);
        } else {
            this.state.genreFilters.splice(this.state.genreFilters.indexOf(genreId), 1)
        }

        console.log(this.state.genreFilters);
    };

    handleReviewChange = (e) => {
        this.setState({
            reviewFilter: e.target.value
        })
    }

    render() {

        const contextValue = {
            handleSignUp: this.handleSignUp,
            justSignedUp: this.state.justSignedUp,
            switchJustSignedUp: this.switchJustSignedUp,
            handleGamesSearch: this.handleGamesSearch,
            handleFolderSubmit: this.handleFolderSubmit,
            setUserId: this.setUserId,
            userId: this.state.userId,
            folders: this.state.folders,
            getFolders: this.getFolders,
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
            deleteFolder: this.deleteFolder
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
