import { SET_FILMS, SET_LOADING, SET_ERROR } from "./movies-actions"

const initialState = {
  status: 'idle', //loading received rejected
  error: null,
  list: [],
}

export const movieReducer = (state = initialState, {type, payload}) => {
  switch(type) {
    case SET_LOADING:
      return {
        ...state,
        status: 'loading',
        error: null
      }

    case SET_ERROR: 
      return {
        ...state,
        status: 'rejected',
        error: payload
      }
      
    case SET_FILMS:
      return {
        ...state,
        status: 'received',
        list: payload
      }
    default:
      return state
  }
}