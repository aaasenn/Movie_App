import { useEffect, useState, createContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { withErrorBoundary } from "react-error-boundary"

import Header from './components/Header';
import { selectAllFilms, selectFilms, fetchFilms } from './features/movies/movies-slice';
import { loadFilms } from './store/movies/movies-actions';
import Home from './pages/Home';
import Registration from './pages/Registration';
import LoginPage from './pages/LoginPage';
import { nagievUniversal } from './config';

const API_KEY = 'bba7381a';
export const SearchContext = createContext();

const App = () => {
  
  //Реализация поиска фильмов
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favs, setFavs] = useState([])

  
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
      <SearchContext.Provider value = {{movies, setSearchValue, searchValue
      }}>
      <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/registration' element={<Registration />}/>
       <Route path='/login' element={<LoginPage />}/>      
      </Routes>
      </SearchContext.Provider>
    </div>

  )
}

export default withErrorBoundary(App, {
  fallback: <div><h1>Looks like smth went wrong</h1>
  <p><img src={nagievUniversal} /></p>
  </div>
});
