import React, { Component } from 'react';
import styles from './styles.module.css';
import { GamesContext } from '../../contexts/GamesContext';
import { platformStore, genreStore } from '../../store';

export default class GameResultItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            platforms: this.props.platforms,
            genres: this.props.genres
        }
    }

    static contextType = GamesContext;
    
    addToFolderClick = (e) => {
        let gameTitle = e.target.getAttribute('id');
        let gameId = e.target.getAttribute('name');

        this.context.handleAddFolderClick(gameTitle, gameId);
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

        let genreArray = [];

        if(this.state.genres == undefined) {
            genreArray = 'No genre information';
        } else {
            this.state.genres.map(genreId => {
                for(let i = 0; i < genreStore.length; i++) {
                    if (genreStore[i].id == genreId) {
                        genreArray.push(genreStore[i].name)
                    }
                }

                console.log(genreArray);
            })
        }

        return (
            <div className={styles.resultItem}>
                <h1 className={styles.gameTitle}>{this.props.name}</h1>
                {genreArray === 'No genre information'
                ?   <p className={styles.noGenre}>No genre information</p>
                :   <div className={styles.genreHolder}>
                        {genreArray.map(genreName => {
                            return <p className={styles.genreName}>{genreName}</p>
                        })}
                    </div>
                }
                {platformArray === 'No platform information'
                ?   <p className={styles.noPlatform}>No platform information</p>
                :   <div className={styles.platformHolder}>
                        {platformArray.map(platformName => {
                            return <p className={styles.platformName}>{platformName} </p>
                        })}
                    </div>    
                }
                {this.props.rating == undefined
                ? <p className={styles.noRating}>No ratings</p>
                : <p className={styles.gameRating}>IGDB Rating: {this.props.rating.toFixed(2)}</p>
                }
                <button id={this.props.name} name={this.props.id} onClick={(e) => this.addToFolderClick(e)} className={styles.addToFolder}>Add to Folder</button>
            </div>
        )
    }
}
