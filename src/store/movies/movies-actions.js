
export const SET_FILMS = '@@movies/SET_FILMS'
export const SET_LOADING = '@@movies/SET_LOADING'
export const SET_ERROR = '@@movies/SET_ERROR';


export const setFilms = (films) => ({
  type: SET_FILMS,
  payload: films
})

export const setLoading = () => ({
  type: SET_LOADING
})

export const setError = (err) => ({
  type: SET_ERROR,
  payload: err
})

export const loadFilms = () => (dispatch, _, {client, api}) => {
  dispatch(setLoading());

  client.get(api.RANDOM_MOVIES)
    .then(({data}) => dispatch(setFilms(data.Search)))
    .catch((err) => dispatch(setError(err.message)))
}