import React, { Component } from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import { GamesContext } from '../../contexts/GamesContext'
import HomepageNav from '../../components/HomepageNav/HomepageNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'; 
import $ from 'jquery';

export default class LandingPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showArrow: false
        }
    }

    componentDidMount() {
        document.title = 'Game Galaxy';
        $(window).scroll(function(){
            $('#title').css('opacity', 1 - $(window).scrollTop() / 400);
        });

        $(window).scroll(function(){
            $('#header').css('opacity', 1 - $(window).scrollTop() / 2000);
        });

        $(window).scroll(function(){
            $('#callToActionButton').css('opacity', 1 - $(window).scrollTop() / 2000)
        })

        sessionStorage.removeItem('user-id');
        sessionStorage.removeItem('game-galaxy-token-key');
    };

    static contextType = GamesContext;

    handleCallToActionClick = (e) => {
        this.context.toggleJustSignedUp();
    };

    returnToTop = (e) => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0; 
    };

    /*Toggle display of up arrow upon hovering over footer*/
    setIsShown = (boolean) => {
        this.setState({
            showArrow: boolean
        })
    };
    /**/

    render() {

        const showArrow = this.state.showArrow;

        return (
            <>
                <HomepageNav />
                
                <main className={styles.main} role='main'>
                    <section className={styles.header} id='header' role='banner'>
                        <div className={styles.title} role='contentinfo'>
                            <h1 id='title' className={styles.mainTitle}>Game Galaxy</h1>
                        </div>

                    <Link to='/signUp'>
                        <button onClick={(e) => this.handleCallToActionClick(e)} id='callToActionButton' className={styles.button}>
                            Create an Account
                            <div className={styles.buttonHorizontal}></div>
                            <div className={styles.buttonVertical}></div>
                        </button> 
                    </Link>
                            
                    </section>

                    <section className={styles.landingSection}>
                        <h2 className={styles.landingText}>Welcome to Game Galaxy, a place to select your next games to play!</h2>
                    </section>

                    <section className={styles.landingSection}>
                        <h2 className={styles.landingText}>Navigate through a large database of games with the ability to view review scores, platform information, and genre</h2>
                    </section>

                    <section className={styles.landingSection}>
                        <h2 className={styles.landingText}>Save games to your account, with the ability to create folders for your games</h2>
                    </section>

                    <section className={styles.landingSection}>
                        <h2 className={styles.landingText}>Check off games when you have completed them!</h2>
                    </section>
                </main>
                <footer className={styles.footer} role='navigation' >
                    <p  role='button'
                        onMouseEnter={() => this.setIsShown(true)}
                        onMouseLeave={() => this.setIsShown(false)}
                        className={styles.returnToTop} 
                        onClick={(e) => this.returnToTop(e)}
                    >Return to Top</p>
                    {showArrow && <FontAwesomeIcon icon={faArrowUp} className={styles.arrowUpLanding}/>}
                </footer>
            </>
        );
    };
};
