import React, { Component } from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

export default class SearchPage extends Component {

    componentDidMount() {
        document.title = "Search Page"
    }
  render() {
    return (
        <>
            <nav className={styles.nav} role="navigation">
                <Link to="/">
                    <p className={styles.signOut}>Sign Out</p>
                </Link>
                
                <Link to="/profile">
                    <p className={styles.profile}>My Profile</p>
                </Link>
            </nav>
            <main className={styles.main} role="main">

                <section className={styles.searchPage}>
                    <form className={styles.searchForm} id="searchForm">

                        <label className={styles.nameInputLabel} htmlFor="nameInput" id="nameInputLabel">Name of game:</label>
                        <input className={styles.nameInput} type="text" id="nameInput" name="nameInput" />

                        <div className={styles.platformHolder}>
                            <label htmlFor="platformSelect">Platform (select any):</label>

                            <label htmlFor="xboxOneSelect">Xbox One</label>
                            <input className={styles.inputCheck} value="Xbox One" type="checkbox" id="xboxOneSelect" name="xboxOneSelect"/>

                            <label htmlFor="playstation4Select">Playstation 4</label>
                            <input className={styles.inputCheck} value="Playstation 4" type="checkbox" id="playstation4Select" name="playstation4Select" />

                            <label htmlFor="playstation3Select">Playstation 3</label>
                            <input className={styles.inputCheck} value="Playstation 3" type="checkbox" id="playstation3Select" name="playstation3Select" />

                            <label htmlFor="pcSelect">PC</label>
                            <input className={styles.inputCheck} value="PC" type="checkbox" id="pcSelect" name="pcSelect" />

                            <label htmlFor="nintendoSwitchSelect">Nintendo Switch</label>
                            <input className={styles.inputCheck} value="Nintendo Switch" type="checkbox" id="nintendoSwitchSelect" name="nintendoSwitchSelect" />

                            <label htmlFor="nintendoDSSelect">Nintendo DS</label>
                            <input className={styles.inputCheck} value="Nintendo DS" type="checkbox" id="nintendoDS" name="nintendoDSSelect"/>
                        </div>

                    </form>
                </section>

                <section className={styles.searchResults}>
                    <h1 className={styles.searchResultHeader}>Search Results:</h1>

                    <div className={styles.searchResultHolder}>

                        <div className={styles.resultItem}>
                            <p>Game 1</p>
                        </div>
                        <div className={styles.resultItem}>
                            <p>Game 2</p>
                        </div>
                        <div className={styles.resultItem}>
                            <p>Game 3</p>
                        </div>
                        <div className={styles.resultItem}>
                            <p>Game 4</p>
                        </div>
                        <div className={styles.resultItem}>
                            <p>Game 5</p>
                        </div>
                        <div className={styles.resultItem}>
                            <p>Game 6</p>
                        </div>

                    </div>


                </section>

            </main>
            <footer className={styles.footer} role="content-info">Footer</footer>
        </>
    )
  }
}
