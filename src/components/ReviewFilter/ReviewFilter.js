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
                    <button onClick={(e) => this.togglePanel(e)} type="button" className='collapsible'>Minimum review score (click to expand)</button>
                    {this.state.open ? (
                        <div className='reviewHolder'>
                            <label htmlFor="reviewInput">Minimum review score (1-100):</label>
                            <input onChange={(e) => value.handleReviewChange(e)} className={styles.reviewInput}  type="number" min="1" max="100" id="reviewInput" name="reviewInput" />
                        </div>
                    )
                    : <div style={hiddenDisplay} className='reviewHolder'>

                        <label htmlFor="reviewInput">Minimum review score (1-100):</label>
                        <input onChange={(e) => value.handleReviewChange(e)} className={styles.reviewInput}  type="number" min="1" max="100" id="reviewInput" name="reviewInput" />

                    </div> }

                </>
            )}

            </GamesConsumer>
        )
    }
}
