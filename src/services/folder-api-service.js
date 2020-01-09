import config from '../config';
import TokenServiceObject from './token-service';

const FolderApiServiceObject = {
    getFolders(userId) {
        let token = TokenServiceObject.getAuthToken();

        return fetch(`${config.API_BASE_URL}/folders/${userId}`, {
            headers: {
                'Authorization': `bearer ${token}`
            }
        })
            .then(res => {
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json();
            });
    },

    postFolder(folderName, user_id) {
        let token = TokenServiceObject.getAuthToken();
        return fetch(`${config.API_BASE_URL}/folders/`, {
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
    }
}

export default FolderApiServiceObject;