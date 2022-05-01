const BASE_URL = 'http://www.omdbapi.com/';

const FILMS = ["harry", "superman", "avengers", "batman"];
function randomFilm(films) {
  return films[Math.floor(Math.random() * films.length)];
}
let RANDOM_NAME = randomFilm(FILMS);

export const RANDOM_MOVIES = BASE_URL + `?s=${RANDOM_NAME}&type=movie&apikey=bba7381a`