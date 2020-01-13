import config from '../config';
import TokenServiceObject from './token-service'

const GameApiServiceObject = {
    getGames(userId) {
        let token = TokenServiceObject.getAuthToken()
        return fetch(`${config.API_BASE_URL}/games/${userId}`, {
            headers: {
                'Authorizaton': `bearer ${token}`
            }
        })
            .then(res => {
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            })
    },

    postGame(game) {
        let token = TokenServiceObject.getAuthToken()
        return fetch(`${config.API_BASE_URL}/games`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `bearer ${token}`
            },
            body: JSON.stringify({
                title: game.title,
                completed: game.completed,
                user_id: game.user_id
            })
        })
        .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
        )
    },

    deleteGame(gameId) {
        let token = TokenServiceObject.getAuthToken();
        return fetch(`${config.API_BASE_URL}/games/${gameId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'Authorization': `bearer ${token}`
            }
        })
            .then(res => {
                if(!res.ok) {
                    return res.json().then(error => {
                        throw error
                    })
                }
                return res.json()
            })
            .catch(error => {
                console.log(error)
            })
    },

    titleSearch(game) {

        let gameTitle = game.title;

        console.log(gameTitle);

        const url = `http://localhost:8080`;

        fetch(url, {
            method: 'GET',
            headers: {
                'gameTitle': gameTitle,
            }
        })
            .then(response => response.json())
            .then(responseJson => console.log(responseJson))
            .catch(error => {
                console.log(error)
            })
    }
}

export default GameApiServiceObject;