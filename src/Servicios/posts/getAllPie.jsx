export function getAllPie() {
    return fetch("https://run.mocky.io/v3/b964e7a4-a408-43a7-afaa-eddf0dbf18bf")
            .then(response => {
            const data = response.json();
            console.log(data);
            return data;
    });
}