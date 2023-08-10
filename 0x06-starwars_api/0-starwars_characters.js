#!/usr/bin/node
function getMovieCharacters(movieId) {
    const apiUrl = `https://swapi.dev/api/films/${movieId}/`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const characters = data.characters;
            const characterPromises = characters.map(characterUrl =>
                fetch(characterUrl)
                    .then(response => response.json())
                    .then(characterData => characterData.name)
            );

            return Promise.all(characterPromises);
        })
        .then(characterNames => {
            characterNames.forEach(name => {
                console.log(name);
            });
        })
        .catch(error => {
            console.error("Error:", error);
        });
}

if (process.argv.length !== 3) {
    console.log("Usage: node starwars_characters.js <movie_id>");
    process.exit(1);
}

const movieId = process.argv[2];
getMovieCharacters(movieId);
