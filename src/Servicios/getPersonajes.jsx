export function getPersonajes () {
    
    const apiURL = `https://raw.githubusercontent.com/akabab/starwars-api/0.2.1/api/all.json`;
    console.log(apiURL);

    return fetch(apiURL).then(response => {
        const data = response.json();
        console.log(data);
        return data;
    });
}