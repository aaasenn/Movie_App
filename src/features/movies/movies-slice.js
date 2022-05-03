import {createSlice, nanoid, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import * as api from '../../config';



export const fetchFilms = createAsyncThunk('/movies/fetchFilms', async () => {
  try {
    const response = await axios.get(api.RANDOM_MOVIES)
    return [...response.data.Search]
    
    
  } catch (err) {
    return err.message;
  }
})

const movieSlice = createSlice({
  name: '@@films',
  initialState: {
    status: 'idle',
    error: null,
    list: []
  },
  reducers: { 
    // setFilms: (state, action) => {
    //   state.list.push(action.payload)
    },

  extraReducers: (builder) => {
    builder
      .addCase(fetchFilms.fulfilled, (state, action) => {
        if (state.status === 'loading') {
          state.status = 'finished'
          state.list.push(action.payload)
        }
        
      })

      .addCase(fetchFilms.pending, (state, action) => {
        if (state.status = 'idle') {
          state.status = 'loading'
        }
      })

      // .addCase(fetchFilms.loading, (state, action) => {
        
      // })
  }
})


export const {setLoading, setError, setFilms} = movieSlice.actions;

export const movieReducer = movieSlice.reducer;

export const selectFilms = (state => ({
  status: state.films.status,
  error: state.films.error,
  qty: state.films.list.length
}))

export const selectAllFilms = (state => state.films.list)