module.exports = {
    API_KEY: process.env.REACT_APP_API_KEY,
    API_BASE_URL: process.env.REACT_APP_API_BASE_URL || "http://localhost:8000",
    TOKEN_KEY: 'game-galaxy-token-key',
    GAME_API_BASE_URL: process.env.GAME_API_BASE_URL || "https://api-v3.igdb.com"
}