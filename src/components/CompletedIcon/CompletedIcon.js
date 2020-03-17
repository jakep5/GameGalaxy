import React, { Component } from 'react'
import styles from './styles.module.css';
import { GamesConsumer, GamesContext } from '../../contexts/GamesContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default class CompletedIcon extends Component {

    static contextType = GamesContext;

    render() {

        return (
            <GamesConsumer>
                {value => (
                    <div className={styles.toggleIconHolder} role='contentinfo'>
                        <FontAwesomeIcon icon={faCheck} size='2x'/>
                    </div>
                )}
            </GamesConsumer>          
        )
    }
}

