import React, { Component } from 'react';
import styles from './styles.module.css';
import { GamesConsumer } from '../../contexts/GamesContext';

export default class ProfileImage extends Component {
    render() {
        return (
            <GamesConsumer>
                {value => (
                <>
                    {value.profileUrl ==null 
                    
                    ? 
                    <div className={styles.imageHolder}>
                        <p className={styles.noImage}>No image uploaded</p>
                    </div>
                    : <image className={styles.profileImage} src={value.profileUrl} alt='Profile Image' />
                    }
                </>
                )}
            </GamesConsumer>
        );
    };
};
