import config from '../config';
import TokenServiceObject from './token-service';

const FolderApiServiceObject = {
    postFolder(folder) {
        let token = TokenServiceObject.getAuthToken();
        return fetch(`${config.API_BASE_URL}/folders/`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `bearer ${token}`
            },
            body: JSON.stringify({
                name: folder.name,
                user_id: folder.user_id,
            })
        })
            .then(res => {
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json();
            })
    }
}