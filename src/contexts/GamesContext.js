import React, { Component } from 'react'
import GameApiServiceObject from '../services/game-api-service';
import FolderApiServiceObject from '../services/folder-api-service';
import {withRouter} from 'react-router-dom'
import AuthApiServiceObject from '../services/auth-api-service';

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
            userId: null,
            isLoading: false,
            justSignedUp: false,
            userId: null,
            folders: null,
            platformFilters: [],
        }
    };

    setNewGames = (games) => {
        console.log(games);
        this.setState({
            games
        })
    }

    setUserId = (userId) => {
        this.setState({
            userId: userId
        });
    };

    handleFolderSubmit = (newFolder) => {

    };

    getFolders = (userId) => {
        FolderApiServiceObject.getFolders(userId)
            .then(folders => this.setNewFolders(folders))
    };

    setNewFolders = (folders) => {
        this.setState({
            folders: folders
        })
    }

    handlePlatformChange = (e) => {
        if (!this.state.platformFilters.includes(e.target.value)) {
            this.state.platformFilters.push(e.target.value);
        } else {
            this.state.platformFilters.splice(this.state.platformFilters.indexOf(e.target.value), 1)
        }

        console.log(this.state.platformFilters)
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
            handlePlatformChange: this.handlePlatformChange,
            setNewGames: this.setNewGames,
            games: this.state.games
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
