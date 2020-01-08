import React, { Component } from 'react'
import GameApiServiceObject from '../services/game-api-service'
import {withRouter} from 'react-router-dom'

export default class GamesContext extends Component {

    render() {

        const contextValue = {

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
