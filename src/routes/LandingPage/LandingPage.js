import React, { Component } from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import $ from 'jquery';

export default class LandingPage extends Component {

    componentDidMount() {
        document.title = "Game Galaxy"
        $(window).scroll(function(){
            $("#title").css("opacity", 1 - $(window).scrollTop() / 400);
        });

        $(window).scroll(function(){
            $("#header").css("opacity", 1 - $(window).scrollTop() / 2000);
        });
    };

    handleCallToActionClick = (e) => {
        window.location.replace('/signIn');
    }

    render() {
        return (
        <>
    
            <Nav />
            
            <main className={styles.main} role="main">
                <header className={styles.header} id='header' role="banner">
                    <div className={styles.title}>
                        <h1 id='title' className={styles.mainTitle}>Game Galaxy</h1>
                    </div>

                    <button onClick={(e) => this.handleCallToActionClick(e)} className={styles.callToAction}>Create an Account</button>      
                </header>

                <section className={styles.section}>
                    <p className={styles.landingText}>Welcome to Game Galaxy, a place to select your next games to play!</p>
                </section>

                <section className={styles.section}>
                    <p className={styles.landingText}>Navigate through a large database of games with the ability to view review scores, average completion time, price, and other various stats</p>
                </section>

                <section className={styles.section}>
                    <p className={styles.landingText}>Save games to your account, with the ability to create folders for your game</p>
                </section>

                <section className={styles.section}>
                    <p className={styles.landingText}>View your friends' accounts via account search function, see what games your friends are playing</p>
                </section>

                <section className={styles.section}>
                    <p className={styles.landingText}>Check off games when you have completed them!</p>
                </section>
            </main>
            <footer className={styles.footer} role="contentinfo"></footer>
        </>
        )
    }
}
