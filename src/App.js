import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import Header from './components/Header';
import { selectAllFilms, selectFilms } from './store/movies/movies-selector';
import { loadFilms } from './store/movies/movies-actions';

const API_KEY = 'bba7381a';

const App = () => {
  
  //Реализация поиска фильмов
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('')

  
  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&type=movie&apikey=bba7381a`
    
    const response = await fetch(url);
    const responseJson = await response.json();
    
    if (responseJson.Search) {
      setMovies(responseJson.Search)
    }
    
  }
  
  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue])
  
  //Начальная загрузка с рандомаными фильмами
  const dispatch = useDispatch();
  const films = useSelector(selectAllFilms)
  const {status, error, qty} = useSelector(selectFilms)

  // setMovies(films)
  useEffect(() => {
      if (!qty) {
        dispatch(loadFilms())
      }    
      setMovies(films)
  }, [qty, dispatch]);


  return (
    <div className='container-fluid movie-app'>
      <header className='row pt-4 pb-4'><Header /></header>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading heading='HDrezka'/>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div className='row'>
        <MovieList movies={movies} />
      </div>
    </div>

  )
}

export default App;
