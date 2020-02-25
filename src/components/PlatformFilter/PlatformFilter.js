import React, { Component } from 'react';
import styles from './styles.module.css';
import { GamesConsumer } from '../../contexts/GamesContext';

export default class PlatformFilter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    togglePanel = (e) => {
        this.setState({
            open: !this.state.open
        })
    }

    render() {

        const hiddenStyle = {
            display: 'none'
        }

        return (
            <GamesConsumer>
                {value => (
                    <>
                        <button onClick={(e) => this.togglePanel(e)} type="button" className={styles.platformCollapse}>Platform (click to expand)</button>
                        {this.state.open ? (
                            <div className={styles.platformHolder}>

                                <label htmlFor="xboxOneSelect">Xbox One</label>
                                <input onChange={(e) => value.handlePlatformChange(e)} className={styles.inputCheck} value="Xbox One" type="checkbox" id="xboxOneSelect" name="xboxOneSelect"/>

                                <label htmlFor="playstation4Select">Playstation 4</label>
                                <input onChange={(e) => value.handlePlatformChange(e)} className={styles.inputCheck} value="Playstation 4" type="checkbox" id="playstation4Select" name="playstation4Select" />

                                <label htmlFor="playstation3Select">Playstation 3</label>
                                <input onChange={(e) => value.handlePlatformChange(e)} className={styles.inputCheck} value="Playstation 3" type="checkbox" id="playstation3Select" name="playstation3Select" />

                                <label htmlFor="pcSelect">PC</label>
                                <input onChange={(e) => value.handlePlatformChange(e)} className={styles.inputCheck} value="PC" type="checkbox" id="pcSelect" name="pcSelect" />

                                <label htmlFor="nintendoSwitchSelect">Nintendo Switch</label>
                                <input onChange={(e) => value.handlePlatformChange(e)} className={styles.inputCheck} value="Nintendo Switch" type="checkbox" id="nintendoSwitchSelect" name="nintendoSwitchSelect" />

                                <label htmlFor="nintendoDSSelect">Nintendo DS</label>
                                <input onChange={(e) => value.handlePlatformChange(e)} className={styles.dsSelect} value="Nintendo DS" type="checkbox" id="nintendoDS" name="nintendoDSSelect"/>
                            </div>
                        )
                        : <div style={hiddenStyle} className='platformHolder'>

                            <label htmlFor="xboxOneSelect">Xbox One</label>
                            <input onChange={(e) => value.handlePlatformChange(e)} className={styles.inputCheck} value="Xbox One" type="checkbox" id="xboxOneSelect" name="xboxOneSelect"/>

                            <label htmlFor="playstation4Select">Playstation 4</label>
                            <input onChange={(e) => value.handlePlatformChange(e)} className={styles.inputCheck} value="Playstation 4" type="checkbox" id="playstation4Select" name="playstation4Select" />

                            <label htmlFor="playstation3Select">Playstation 3</label>
                            <input onChange={(e) => value.handlePlatformChange(e)} className={styles.inputCheck} value="Playstation 3" type="checkbox" id="playstation3Select" name="playstation3Select" />

                            <label htmlFor="pcSelect">PC</label>
                            <input onChange={(e) => value.handlePlatformChange(e)} className={styles.inputCheck} value="PC" type="checkbox" id="pcSelect" name="pcSelect" />

                            <label htmlFor="nintendoSwitchSelect">Nintendo Switch</label>
                            <input onChange={(e) => value.handlePlatformChange(e)} className={styles.inputCheck} value="Nintendo Switch" type="checkbox" id="nintendoSwitchSelect" name="nintendoSwitchSelect" />

                            <label htmlFor="nintendoDSSelect">Nintendo DS</label>
                            <input onChange={(e) => value.handlePlatformChange(e)} className={styles.dsSelect} value="Nintendo DS" type="checkbox" id="nintendoDS" name="nintendoDSSelect"/>
                        </div> }
                        
                    </>
                )}

                </GamesConsumer>
        )
    }
}
