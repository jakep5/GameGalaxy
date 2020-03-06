import React, { Component } from 'react';
import styles from './styles.module.css';
import { GamesContext } from '../../contexts/GamesContext';

export default class ImageUpload extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imageUrl: null,
        }
    };

    static contextType = GamesContext;

    checkUploadResult = (result) => {
        this.context.setUserImage(result[0].secure_url)
    };

    showUploadWidget = () => {
        window.cloudinary.openUploadWidget({
            cloud_name: 'dgo11egfl',
            upload_preset: 'psazjmxt',
            tags: sessionStorage.getItem('user-id')
        },

        (error, result) => {
            this.checkUploadResult(result);
        })
    };
    
    render() {
        return (
            <div className={styles.uploadHolder}>
                <button 
                    onClick={this.showUploadWidget.bind(this)} 
                    className={styles.uploadButton}
                >
                    Upload Profile Image
                </button>
            </div>
        );
    };
};
