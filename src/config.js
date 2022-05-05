const BASE_URL = 'http://www.omdbapi.com/';

const FILMS = ["harry", "superman", "avengers", "batman"];
function randomFilm(films) {
  return films[Math.floor(Math.random() * films.length)];
}
let RANDOM_NAME = randomFilm(FILMS);
export const nagievUniversal = "https://c.tenor.com/Wu840ZYq5wEAAAAM/nagiev-%D0%BD%D0%B0%D0%B3%D0%B8%D0%B5%D0%B2.gif"

export const RANDOM_MOVIES = BASE_URL + `?s=${RANDOM_NAME}&type=movie&apikey=bba7381a`