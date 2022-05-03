import {configureStore} from '@reduxjs/toolkit';
import  {movieReducer}  from './features/movies/movies-slice';



export default configureStore({
  reducer: {
    films: movieReducer,
  },
  devtools: true,
})