let testUserGames = [
    {
        "id": 1,
        "title": "Halo 4",
        "igdb_id": 123,
        "completed": "false",
        "folder_id": 1,
        "user_id": 1
    },
    {
        "id": 2,
        "title": "Halo 3",
        "igdb_id": 124,
        "completed": "false",
        "folder_id": 1,
        "user_id": 1
    },
    {
        "id": 3,
        "title": "Red Dead Redemption",
        "igdb_id": 125,
        "completed": "false",
        "folder_id": 1,
        "user_id": 1
    },
    {
        "id": 4,
        "title": "Super Smash Brothers Ultimate",
        "igdb_id": 126,
        "completed": "false",
        "folder_id": 1,
        "user_id": 1
    }
]

let testFoldersArray = [
    {
        "id": 1,
        "name": "Test",
        "user_id": 1

    },
    {
        "id": 2,
        "name": "Test 2",
        "user_id": 1
    }
];

let testGameResults = [
    {
        "id": 123,
        "name": "Halo 4",
        "genres": [5],
        "platforms": [6, 11, 14, 36],
        "rating": 85.01
    },
    {
        "id": 124,
        "name": "Halo 3",
        "genres": [5],
        "platforms": [6, 11, 14, 36],
        "rating": 82.52
    }
]

let TestObject = {
    userGames: testUserGames,
    games: testGameResults,
    isLoading: true,
    folders: testFoldersArray,
}

module.exports = TestObject;