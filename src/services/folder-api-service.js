import config from '../config';
import TokenServiceObject from './token-service';
import { GamesContext } from '../contexts/GamesContext';


const FolderApiServiceObject = {

    getFolders(userId) {
        let token = TokenServiceObject.getAuthToken();

        return fetch(`${config.API_BASE_URL}/folders`, {
            headers: {
                'Authorization': `bearer ${token}`,
                'user_id': userId
            }
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },

    getById(folderId) {
        let token = TokenServiceObject.getAuthToken();


        return fetch(`${config.API_BASE_URL}/folders/id/${parseInt(folderId)}`, {
            headers: {
                'Authorization': `bearer ${token}`
            }
        })
            .then(res =>
                (!res.ok)
                    ?res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },

    postFolder(folderName, user_id) {
        let token = TokenServiceObject.getAuthToken();
        return fetch(`${config.API_BASE_URL}/folders`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `bearer ${token}`
            },
            body: JSON.stringify({
                name: folderName,
                user_id: user_id,
            })
        })
            .then(res => {
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json();
            })
    },

    deleteFolder(deleteId) {
        let token = TokenServiceObject.getAuthToken();
        return fetch(`${config.API_BASE_URL}/folders/id/${deleteId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'Authorization': `bearer ${token}`
            }
        })
        .then(response => {
            if(!response.ok) {
                    return response.json().then(error => {
                        throw error
                    })
            }
            return response.json()
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export default FolderApiServiceObject;