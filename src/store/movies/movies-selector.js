export const selectFilms = (state => ({
  status: state.films.status,
  error: state.films.error,
  qty: state.films.list.length
}))

export const selectAllFilms = (state => state.films.list)