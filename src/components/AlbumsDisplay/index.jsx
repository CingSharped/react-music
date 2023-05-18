import { useState } from "react"
import "./style.css"
import albums from "../../assets/albums.json"
import { SongsDisplay } from '..'

const AlbulmsDisplay = () => {
  const [selectedAlbum, setSelectedAlbum] = useState([])

  return (
    <>
      <h2>Albums</h2>
      <div className="albums-container">
        {albums.map((album, key) => {
          return (
            <div key={key} onClick={() => setSelectedAlbum(album)} className="card">
              <img className="card-img-top" src={album["cover-art"]} alt="" />
              <div className="card-body">
                <h5 className="card-title">{album.title}</h5>
                <p className="card-text">{album.release}</p>
              </div>
            </div>
          )
        })}
      </div>
      {selectedAlbum.songs ? <SongsDisplay songs={selectedAlbum.songs}/> : <></>}
    </>
  )
}

export default AlbulmsDisplay
