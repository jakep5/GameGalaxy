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
            games: [],
            userId: null,
            isLoading: false,
            justSignedUp: false,
            userId: null,
            folders: [],
        }
    };

    handleGamesSearch = (games) => {
        this.setState({
            games: games
        })
    };

    setUserId = (userId) => {
        this.setState({
            userId: userId
        });
    };

    handleFolderSubmit = (newFolder) => {

    };

    getFolders = () => {
        let userId = this.state.userId;

        FolderApiServiceObject.getFolders(userId)
            .then(folders => this.setNewFolders(folders))
    };

    setNewFolders = (folders) => {
        this.setState({
            folders
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
            getFolders: this.getFolders
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
