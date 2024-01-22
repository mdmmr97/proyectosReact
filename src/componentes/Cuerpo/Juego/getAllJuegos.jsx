export function getAllJuegos () {

    return fetch("https://www.freetogame.com/api/games")
           .then(response => {
                const data = response.json();
                console.log(data);
                return data;
    })
}