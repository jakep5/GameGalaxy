import React, { Component } from 'react';
import styles from './styles.module.css';
import { GamesConsumer } from '../../contexts/GamesContext';

export default class ProfileImage extends Component {
    render() {
        return (
            <GamesConsumer>
                {value => (
                    <div className={styles.imageHolder}>
                        {value.profileUrl == null 
                        ? <p className={styles.noImage}>No image uploaded</p>
                        : <image className={styles.profileImage} src={value.profileUrl} alt='Profile Image' />
                        }
                        
                    </div>
                )}
            </GamesConsumer>
            
            
        )
    }
}
