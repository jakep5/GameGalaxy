import React, { Component } from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

export default class LandingPage extends Component {

    componentDidMount() {
        document.title = "Landing Page"
    }

    render() {
        return (
        <>
            <nav className={styles.nav} role="navigation">

                <Link to="/signIn">
                    <p className={styles.signIn}>Sign In</p>
                </Link>

                <Link to="/signUp">
                    <p className={styles.signUp}>Sign Up</p>
                </Link>
                    
            </nav>
            <main className={styles.main} role="main">
                <header className={styles.header} role="banner">
                    <h1>Game Galaxy</h1>
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
