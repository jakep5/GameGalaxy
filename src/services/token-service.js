import config from '../config'

const TokenServiceObject = {
    makeBasicAuthToken(userName, password) {
        return window.btoa(`${userName}:${password}`)
    },

    saveAuthToken(token) {
        window.sessionStorage.setItem(config.TOKEN_KEY, token)
    },

    getAuthToken() {
        return window.sessionStorage.getItem(config.TOKEN_KEY)
    },

    clearAuthToken() {
        window.sessionStorage.removeItem(config.TOKEN_KEY)
    },

    hasAuthToken() {
        return !!TokenServiceObject.getAuthToken()
    }
}

export default TokenServiceObject