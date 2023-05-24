export const addLikedSong = (song) => {
  return {
      type: "ADD",
      payload: song
    }
}


export const removeLikedSong = (song) => {
  return {
      type: "REMOVE",
      payload: song
    }
}

