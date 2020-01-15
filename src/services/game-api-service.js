import config from '../config';
import TokenServiceObject from './token-service';
import GamesContext from '../contexts/GamesContext';

const GameApiServiceObject = {
    getGames(userId) {
        let token = TokenServiceObject.getAuthToken();
        return fetch(`${config.API_BASE_URL}/games/${userId}`, {
            headers: {
                'Authorizaton': `bearer ${token}`
            }
        })
            .then(response => {
                if (!response.ok) {
                    response.json().then(e => Promise.reject(e))
                } else {
                    let responseJson = response.json()
                    return responseJson
                }
            })

            
    },

    postGame(gameTitle, gameId, folderToAddTo) {
        let token = TokenServiceObject.getAuthToken();
        let user_id = sessionStorage.getItem('user-id');
        return fetch(`${config.API_BASE_URL}/games`, {
            method: 'POST',
            headers: {
                'Authorization': `bearer ${token}`,
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                title: gameTitle,
                igdb_id: gameId,
                completed: false,
                folder_id: folderToAddTo,
                user_id: user_id
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
}

export default GameApiServiceObject;