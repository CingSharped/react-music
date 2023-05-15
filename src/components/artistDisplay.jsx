import {useState} from 'react'
import '../styles/artistDisplay.css'
import AlbumsDisplay from '../components/albumsDisplay'
import SongsDisplay from './songsDisplay'

export default function ArtistDisplay(props) {
    const [currentArtist, setCurrentArtist] = useState(props.artist)
    const [selectedAlbum, setSelectedAlbum] = useState()

    const selectAlbum = (newAlbum) => {
        setSelectedAlbum(newAlbum)
    }

    return (
        <>
        <div class="container">
            <img class="artist-image" src="https://townsquare.media/site/366/files/2014/12/Linkin-Park.jpg?w=980&q=75" alt="Artist Image"></img>
            <div class="artist-info">
                <h2 class="artist-title">{currentArtist}</h2>
                <p class="genres"><em>Alternative rock, nu metal, alternative metal, rap,  rock, electronic rock, pop rock</em></p>
                <p>Linkin Park is an American rock band from Agoura Hills, California. The band's current lineup comprises vocalist/rhythm guitarist/keyboardist Mike Shinoda, lead guitarist Brad Delson, bassist Dave Farrell, DJ/turntablist Joe Hahn and drummer Rob Bourdon, all of whom are founding members. Vocalists Mark Wakefield and Chester Bennington are former members of the band. Categorized as alternative rock, Linkin Park's earlier music spanned a fusion of heavy metal and hip hop, while their later music features more electronica and pop elements.</p>
            </div>
        </div>
        <AlbumsDisplay selectAlbum={selectAlbum}/>
        {selectedAlbum ? <SongsDisplay songs={selectedAlbum.songs} /> : <></>}
        </>
    )
}