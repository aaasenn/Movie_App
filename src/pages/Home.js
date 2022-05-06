import React from 'react'
import MovieList from '../components/MovieList'
import MovieListHeading from '../components/MovieListHeading'
import SearchBox from '../components/SearchBox'

const Home = ({searchValue, setSearchValue, movies}) => {
  return (
    <>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading heading='HDrezka'/>
        <SearchBox />
      </div>
      <div className='row'>
        <MovieList />
      </div>      
    </>
  )
}

export default Home
