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
        let title = game.title;

        /* const proxyurl = 'http://localhost:8080/' */

        const url = `${config.GAME_API_BASE_URL}/games`

        return fetch(url, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'user-key': config.GAME_API_KEY,
                'Content-Type': 'application/raw'
            },
            body: `search ${title}; fields name; limit 50;`,
        })
            .then(res => {
                if(!res.ok) {
                    return res.json().then(error => {
                        throw error
                    })
                }
                return res.json();
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export default GameApiServiceObject;