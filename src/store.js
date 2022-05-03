import {configureStore} from '@reduxjs/toolkit';
import  {movieReducer}  from './features/movies/movies-slice';
import { userReducer } from './features/user/user-slice';



export default configureStore({
  reducer: {
    films: movieReducer,
    user: userReducer,
  },
  devtools: true,
})