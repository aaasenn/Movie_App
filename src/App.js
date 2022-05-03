import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from "react-router-dom";

import Header from './components/Header';
import { selectAllFilms, selectFilms, fetchFilms } from './features/movies/movies-slice';
import { loadFilms } from './store/movies/movies-actions';
import Home from './pages/Home';
import Registration from './pages/Registration';
import LoginPage from './pages/LoginPage';

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
      if (status === 'idle') {
        dispatch(fetchFilms())
      }  
      if (status === 'finished') {
        setMovies(...films)
      }
  }, [status, dispatch]);


  return (
    <div className='container-fluid movie-app'>
      <header className='row pt-4 pb-4'>
        <Header />
      </header>
      <Routes>
      <Route path='/' element={
        <Home
          searchValue={searchValue} 
          setSearchValue={setSearchValue} 
          movies={movies} />} />
       <Route path='/registration' element={<Registration />}/>
       <Route path='/login' element={<LoginPage />}/>
      </Routes>
    </div>

  )
}

export default App;
