import React, { Component } from 'react'
import styles from './styles.module.css'
import './styles.css'
import jQuery from 'jquery'
import $ from 'jquery'

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


        return (
            <>
                <button onClick={(e) => this.togglePanel(e)} type="button" className='collapsible'>Platform (click to expand)</button>
                {this.state.open ? (
                    <div className='platformHolder'>

                        <label htmlFor="xboxOneSelect">Xbox One</label>
                        <input className={styles.inputCheck} value="Xbox One" type="checkbox" id="xboxOneSelect" name="xboxOneSelect"/>

                        <label htmlFor="playstation4Select">Playstation 4</label>
                        <input className={styles.inputCheck} value="Playstation 4" type="checkbox" id="playstation4Select" name="playstation4Select" />

                        <label htmlFor="playstation3Select">Playstation 3</label>
                        <input className={styles.inputCheck} value="Playstation 3" type="checkbox" id="playstation3Select" name="playstation3Select" />

                        <label htmlFor="pcSelect">PC</label>
                        <input className={styles.inputCheck} value="PC" type="checkbox" id="pcSelect" name="pcSelect" />

                        <label htmlFor="nintendoSwitchSelect">Nintendo Switch</label>
                        <input className={styles.inputCheck} value="Nintendo Switch" type="checkbox" id="nintendoSwitchSelect" name="nintendoSwitchSelect" />

                        <label htmlFor="nintendoDSSelect">Nintendo DS</label>
                        <input className={styles.inputCheck} value="Nintendo DS" type="checkbox" id="nintendoDS" name="nintendoDSSelect"/>
                    </div>
                )
                : null }
                
            </>
        )
    }
}
