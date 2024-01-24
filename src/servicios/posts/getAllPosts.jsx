//import fetch from 'node-fetch';

export async function getAllPosts () {

  //const fetch = require('node-fetch');
  const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '68b127b7c7msh41b064cc721acdfp1bdc7bjsnb7d7be062c60',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

/*
 {
    "id": 6,
    "title": "Blade and Soul",
    "thumbnail": "https://www.freetogame.com/g/6/thumbnail.jpg",
    "short_description": "A free-to-play martial arts MMORPG that tasks players with learning combination attacks.",
    "game_url": "https://www.freetogame.com/open/blade-and-soul",
    "genre": "MMORPG",
    "platform": "PC (Windows)",
    "publisher": "NCSoft",
    "developer": "NCSoft",
    "release_date": "2016-01-19",
    "freetogame_profile_url": "https://www.freetogame.com/blade-and-soul"
  },
*/