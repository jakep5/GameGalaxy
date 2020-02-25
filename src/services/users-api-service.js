import config from '../config';

const UsersApiServiceObject = {
    setProfileImage(url, user_id) {
        return fetch(`${config.API_BASE_URL}/users/profile`, {
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            method: 'PATCH',
            body: JSON.stringify({
                profileUrl: url,
                userId: user_id
            })
        })
            .then(res => {
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json();
            })
    }
};

export default UsersApiServiceObject;