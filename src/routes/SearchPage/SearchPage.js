import React, { Component } from 'react';
import styles from './styles.module.css';

export default class SearchPage extends Component {
  render() {
    return (
        <>
            <nav role="navigation">
                <p class="signOut">Sign Out</p>
                <p class="profile">My Profile</p>
            </nav>
            <main role="main">

                <section class="searchPage">
                    <form class="searchForm" id="searchForm">

                        <label for="nameInput" id="nameInputLabel">Name of game:</label>
                        <input type="text" id="nameInput" name="nameInput" />

                        <div class="platformHolder">
                            <label for="platformSelect">Platform (select any):</label>

                            <input type="checkbox" id="xboxOneSelect" name="xboxOneSelect">Xbox One</input>
                            <input type="checkbox" id="playstation4Select" name="playstation4Select">Playstation 4</input>
                            <input type="checkbox" id="playstation3Select" name="playstation3Select">Playstation 3</input>
                            <input type="checkbox" id="pcSelect" name="pcSelect">PC</input>
                            <input type="checkbox" id="nintendoSwitchSelect" name="nintendoSwitchSelect">Nintendo Switch</input>
                            <input type="checkbox" id="nintendoDS" name="nintendoDS">Nintendo DS</input>
                            <input type="checkbox" id="nintendoSwitchSelect" name="nintendoSwitchSelect">Nintendo Switch</input>
                        </div>



                    </form>
                </section>

                <section class="searchResults">
                    <h1 class="searchResultHeader">Search Results:</h1>

                    <div className="searchResultHolder">

                        <div class="resultItem">
                            <p>Game 1</p>
                        </div>
                        <div class="resultItem">
                            <p>Game 2</p>
                        </div>
                        <div class="resultItem">
                            <p>Game 3</p>
                        </div>
                        <div class="resultItem">
                            <p>Game 4</p>
                        </div>
                        <div class="resultItem">
                            <p>Game 5</p>
                        </div>
                        <div class="resultItem">
                            <p>Game 6</p>
                        </div>

                    </div>


                </section>

            </main>
            <footer role="content-info">Footer</footer>
        </>
    )
  }
}
