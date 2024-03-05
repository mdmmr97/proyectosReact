export function getPersonajeId (id) {
    const apiURL = `https://raw.githubusercontent.com/akabab/starwars-api/0.2.1/api/id/${id}.json`;
    console.log(apiURL);

    return fetch(apiURL).then(response => {
        const data = response.json();
        console.log(data);
        return data;
    });
}