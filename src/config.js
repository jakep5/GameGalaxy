module.exports = {
    API_KEY: process.env.REACT_APP_API_KEY,
    API_BASE_URL: process.env.REACT_APP_API_BASE_URL || /* "https://cryptic-coast-46513.herokuapp.com" */'http://localhost:8000',
    TOKEN_KEY: 'game-galaxy-token-key',
    GAME_API_BASE_URL: process.env.GAME_API_BASE_URL || "https://api-v3.igdb.com",
    GAME_API_KEY: process.env.GAME_API_KEY,
    IGDB_BASE_URL: process.env.IGDB_BASE_URL || "https://hidden-hollows-79933.herokuapp.com",
    TWITCH_BASE_URL: process.env.TWITCH_BASE_URL || "https://api.twitch.tv/helix/games?query=",
    TWITCH_CLIENT_ID: process.env.TWITCH_CLIENT_ID
}