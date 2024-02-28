export function getComidaNombre (nombre) {
    const apiURL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${nombre}`;
    console.log(apiURL);

    return fetch(apiURL).then(response => {
        const data = response.json();
        console.log(data);
        return data;
    });
}