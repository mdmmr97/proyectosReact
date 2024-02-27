export function getComidas (keyword) {
    
    const apiURL = `https://themealdb.com/api/json/v1/1/search.php?f=${keyword}`;
    console.log(apiURL);

    return fetch(apiURL).then(response => {
        const data = response.json();
        console.log(data);
        return data;
    });
}