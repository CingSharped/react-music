import { useState , useEffect } from "react"
import { LikesDisplay } from ".."
import axios from "axios"
import "./style.css"

const SongsDisplay = ({ songs }) => {
  const [currentSongs, setCurrentSongs] = useState(songs)
  
  useEffect(() => {
    setCurrentSongs(songs)
  },[songs])

  return (
    <>
      <div className="songs-container">
        <h3>Songs</h3>
        {currentSongs.map((song, key) => {
          return (
            <div key={key} className="song">
              <p>{song}</p>
              <LikesDisplay song={song} likes="0" />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default SongsDisplay
