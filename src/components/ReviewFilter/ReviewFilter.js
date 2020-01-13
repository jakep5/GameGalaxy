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

    handleReviewChange = () => {
        let score = document.getElementById('reviewInput').value;

        this.context.handleReviewChange(score);
    }

    render() {

        const hiddenDisplay = {
            display: 'none'
        }
        return (
            <GamesConsumer>
            {value => (
                <>
                    <button onClick={(e) => this.togglePanel(e)} type="button" className='collapsible'>Platform (click to expand)</button>
                    {this.state.open ? (
                        <div className='reviewHolder'>

                            <form onSubmit={this.handleReviewChange} id="reviewSetForm" className={styles.reviewSetForm}>

                                <label htmlFor="reviewInput">Minimum review score (1-100):</label>
                                <input className={styles.reviewInput}  type="number" min="1" max="100" id="reviewInput" name="reviewInput" />

                                <button type="submit" htmlFor="reviewSetForm" className={styles.setButton}>Set</button>

                            </form>
                        </div>
                    )
                    : <div style={hiddenDisplay} className='reviewHolder'>

                        <form onSubmit={this.handleReviewChange} id="reviewSetForm" className={styles.reviewSetForm}>

                            <label htmlFor="reviewInput">Minimum review score (1-100):</label>
                            <input className={styles.reviewInput}  type="number" min="1" max="100" id="reviewInput" name="reviewInput" />

                            <button type="submit" htmlFor="reviewSetForm" className={styles.setButton}>Set</button>

                        </form>
                    </div> }

                </>
            )}

            </GamesConsumer>
        )
    }
}
