import React, { Component } from 'react';
import styles from './styles.module.css';
import { GamesContext } from '../../contexts/GamesContext';
import { GamesConsumer } from '../../contexts/GamesContext';

export default class ReviewFilter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    static contextType = GamesContext;

    togglePanel = () => {
        this.setState({
            open: !this.state.open
        })
    }

    render() {

        const hiddenDisplay = {
            display: 'none'
        }
        return (
            <GamesConsumer>
            {value => (
                <>
                    <h1 className={styles.reviewFilterTitle}>Minimum review score:</h1>
                        <div className={styles.reviewHolder}>
                            <label htmlFor="reviewInput">Minimum review score (1-100):</label>
                            <input onChange={(e) => value.handleReviewChange(e)} className={styles.reviewInput}  type="number" min="1" max="100" id="reviewInput" name="reviewInput" />
                        </div>

                </>
            )}

            </GamesConsumer>
        )
    }
}
