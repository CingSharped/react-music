import Likes from './likesDisplay'
import '../styles/songsDisplay.css'
import { useState } from 'react'

export default function SongsDisplay(props) {
    const [currentSongs, setCurrentSongs] = useState(props.songs)
    return (
        <>
            <div class='songs-container'>
                <h3>Songs</h3>
                {props.songs.map((song, key) => {
                    return (
                        <>
                            <div key={key} class='song'>
                                
                                <p>{song}</p>
                                <Likes key={key} likes="0"/>
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    )
}