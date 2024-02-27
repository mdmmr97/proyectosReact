export function getComidaId (id) {
    const apiURL = `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    console.log(apiURL);

    return fetch(apiURL).then(response => {
        const data = response.json();
        console.log(data);
        return data;
    });
}