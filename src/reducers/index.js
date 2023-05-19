import { combineReducers } from "redux";
import likedSongsReducer from "./likedSongsReducer";


const allReducers = combineReducers({
  likedSongs: likedSongsReducer,
});

export default allReducers;
