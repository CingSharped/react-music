import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../../action-creators/likedSongs";
import "./style.css"
// import likedLogo from '../../assets/'

const LikesDisplay = ({ song, likes }) => {
  const [currentLikes, setCurrentLikes] = useState(parseInt(likes))
  const [currentSong, setCurrentSong] = useState(song)
  const [liked, setLiked] = useState()

  const dispatch = useDispatch()
  const likedSongs = useSelector(state => state.likedSongs)
  const { addLikedSong, removeLikedSong } = bindActionCreators(actionCreators, dispatch)

  useEffect(() => {
    setCurrentSong(song)
    if (likedSongs.likedSongs.includes(song)) {
      setLiked(true);
      setCurrentLikes(likes + 1);
    } else {
      setLiked(false)
      setCurrentLikes(likes)
    }
  }, [song])

  const handeClick = (e) => {
    if (liked) {
      removeLikedSong(currentSong)
      setCurrentLikes((likes) => parseInt(likes) - 1)
      setLiked(false)
    } else {
      if (likedSongs.likedSongs.includes(currentSong) === false) {
        addLikedSong(currentSong);
      }
      setCurrentLikes((likes) => parseInt(likes) + 1)
      setLiked(true)
    }
  }

  return (
      <div className="likes-container">
        <h3 id="likes-display" className="likes-display">Likes: {currentLikes}</h3>
        <button className="like-button" onClick={handeClick}>{liked ? "Unlike" : "Like"}</button>
      </div>
  )
}

export default LikesDisplay
