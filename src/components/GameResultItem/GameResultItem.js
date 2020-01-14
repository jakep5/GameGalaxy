import React, { Component } from 'react';
import styles from './styles.module.css';
import { GamesContext } from '../../contexts/GamesContext';
import { platformStore } from '../../store';

export default class GameResultItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            platforms: this.props.platforms
        }
    }

    componentDidMount = () => {

    }

    static contextType = GamesContext;
    
    addToFolderClick = (e) => {
        this.context.handleAddFolderClick();
    }

    render() {

        let platformArray = [];

        if (this.state.platforms == undefined) {
            platformArray = 'No platform information'
        } else {
            this.state.platforms.map(platformId => {
                for(let i = 0; i < platformStore.length; i++) {
                    if(platformStore[i].id == platformId) {
                        platformArray.push(platformStore[i].name);
                    }
                }
            })
        }

        console.log(platformArray)

        return (
            <div className={styles.resultItem}>
                <h1 className={styles.gameTitle}>{this.props.name}</h1>
                <p className={styles.gameGenres}>{this.props.genres}</p>
                {platformArray === 'No platform information'
                ?   <p className={styles.noPlatform}>No platform information</p>
                :   platformArray.map(platformName => {
                    return <p className={styles.platformName}>{platformName}</p>
                })
                }
                {this.props.rating == undefined
                ? <p className={styles.noRating}>No ratings</p>
                : <p className={styles.gameRating}>{this.props.rating.toFixed(2)}</p>
                }
                <button onClick={(e) => this.addToFolderClick(e)} className={styles.addToFolder}>Add to Folder</button>
            </div>
        )
    }
}
