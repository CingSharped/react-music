import {useState} from 'react'
import '../styles/albumsDisplay.css'
import albums from '../assets/albums.json'

export default function AlbulmsDisplay({selectAlbum}) {
    return (
        <>
            <h2>Albums</h2>
            <div class='albums-container'>
                {albums.map((album, key) => {
                    return (
                    <div key={key} onClick={() => selectAlbum(album)} class='card' >
                        <img class='card-img-top' src={album['cover-art']} alt="" />
                        <div class='card-body'>
                            <h5 class='card-title'>{album.title}</h5>
                            <p class='card-text'>{album.release}</p>
                        </div>
                    </div>
                    )
                })}
            </div>
            
        </>
    )
}