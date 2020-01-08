import config from '../config'

const AuthApiServiceObject = {
    logIn(credentials) {
        return fetch(`${config.API_BASE_URL}/`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(credentials)
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },

    registerUser(user) {
        return fetch(`${config.API_BASE_URL}/users`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => 
                    (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
}

export default AuthApiServiceObject;