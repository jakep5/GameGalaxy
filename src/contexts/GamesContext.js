import React, { Component } from 'react'
import GameApiServiceObject from '../services/game-api-service'
import {withRouter} from 'react-router-dom'
import AuthApiServiceObject from '../services/auth-api-service';

export const GamesContext = React.createContext();

class GamesProvider extends Component {

    static defaultProps = {
        history: {
            push: () => {}
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            games: [],
            userId: null,
            isLoading: false,
            justSignedUp: false
        }
    }

    handleGamesSearch = (games) => {
        this.setState({
            games: games
        })
    }

    render() {

        const contextValue = {
            handleSignUp: this.handleSignUp,
            justSignedUp: this.state.justSignedUp,
            switchJustSignedUp: this.switchJustSignedUp,
            handleGamesSearch: this.handleGamesSearch
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
