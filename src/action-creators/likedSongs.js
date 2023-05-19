export const addLikedSong = (song) => {
  return (dispatch) => {
    dispatch({
      type: "ADD",
      payload: song
    });
  };
};

export const removeLikedSong = (song) => {
  return (dispatch) => {
    dispatch({
      type: "REMOVE",
      payload: song
    })
  }
}
