import React, { Component } from 'react';
import styles from './styles.module.css';
import { GamesConsumer } from '../../contexts/GamesContext';

export default class PlatformFilter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    };

    render() {

        return (
            <GamesConsumer>
                {value => (
                    <>
                        <h1 className={styles.platformFilterLabel}>Platform Filters</h1>
                        
                        <div className={styles.platformHolder}>

                            <ul className={styles.platformFiltersList}>
                                <li className={styles.platformFilterItem}>
                                    <label htmlFor="xboxOneSelect">Xbox One</label>
                                    <input onChange={(e) => value.handlePlatformChange(e)} className={styles.inputCheck} value="Xbox One" type="checkbox" id="xboxOneSelect" name="xboxOneSelect"/>
                                </li>

                                <li className={styles.platformFilterItem}>
                                    <label htmlFor="playstation4Select">Playstation 4</label>
                                    <input onChange={(e) => value.handlePlatformChange(e)} className={styles.inputCheck} value="PlayStation 4" type="checkbox" id="playstation4Select" name="playstation4Select" />
                                </li>

                                <li className={styles.platformFilterItem}>
                                    <label htmlFor="playstation3Select">Playstation 3</label>
                                    <input onChange={(e) => value.handlePlatformChange(e)} className={styles.inputCheck} value="PlayStation 3" type="checkbox" id="playstation3Select" name="playstation3Select" />
                                </li>

                                <li className={styles.platformFilterItem}>
                                    <label htmlFor="pcSelect">PC</label>
                                    <input onChange={(e) => value.handlePlatformChange(e)} className={styles.inputCheck} value="PC" type="checkbox" id="pcSelect" name="pcSelect" />
                                </li>

                                <li className={styles.platformFilterItem}>
                                    <label htmlFor="nintendoSwitchSelect">Nintendo Switch</label>
                                    <input onChange={(e) => value.handlePlatformChange(e)} className={styles.inputCheck} value="Nintendo Switch" type="checkbox" id="nintendoSwitchSelect" name="nintendoSwitchSelect" />
                                </li>

                                <li className={styles.platformFilterItem}>
                                    <label htmlFor="nintendoDSSelect">Nintendo DS</label>
                                    <input onChange={(e) => value.handlePlatformChange(e)} className={styles.inputCheck} value="Nintendo DS" type="checkbox" id="nintendoDS" name="nintendoDSSelect"/>
                                </li>
                            </ul>       
                        </div>
                        
                    </>
                )}

                </GamesConsumer>
        );
    };
};
