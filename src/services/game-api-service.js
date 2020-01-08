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
    }
}