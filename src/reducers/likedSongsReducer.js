

const initialState = {
  likedSongs: []
};

const likedSongsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {...state, likedSongs: [...state.likedSongs, action.payload]}
    case "REMOVE":
      return {... state, likedSongs: [...state.likedSongs.filter(song => song !== action.payload)]}
    default:
      return state
  }
};

export default likedSongsReducer