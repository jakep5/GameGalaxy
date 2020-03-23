import React, { Component } from 'react';
import styles from './styles.module.css';
import { GamesConsumer } from '../../contexts/GamesContext';


export default class FolderSuccessPopup extends Component {
    render() {
        return (
            <GamesConsumer>
                {value => (
                    <div className={styles.successPopup} id='successPopup' role='alert'>
                        <p className={styles.successMessage}>Success! Added to {value.focusedFolder}</p>
                    </div>
                )}
            </GamesConsumer>           
        );
    };
};
