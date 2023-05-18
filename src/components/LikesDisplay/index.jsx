import { useState, useEffect } from "react"
import "./style.css"
// import likedLogo from '../../assets/'

const LikesDisplay = ({ song, likes }) => {
  const [currentLikes, setCurrentLikes] = useState(parseInt(likes))
  const [currentSong, setCurrentSong] = useState(song)
  const [liked, setLiked] = useState(false)

  useEffect(() => {
    setCurrentSong(song)
    setCurrentLikes(likes)
    setLiked(false)
  }, [song])

  const handeClick = (e) => {
    if (liked) {
      setCurrentLikes((likes) => likes - 1)
      setLiked(false)
    } else {
      setCurrentLikes((likes) => likes + 1)
      setLiked(true)
    }
  }

  return (
    <>
      <div className="likes-container">
        <h3 id="likes-display">Likes: {currentLikes}</h3>
        <button onClick={handeClick}>{liked ? "Unlike" : "Like"}</button>
        {liked ? (
          // <img width="25px" src={likedLogo} alt="" />
          <p>Image goes here</p>
        ) : (
          <></>
        )}
      </div>
    </>
  )
}

export default LikesDisplay
