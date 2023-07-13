import { useState, useEffect } from "react";
import "./style.css";

const ArtistDisplay = () => {
  console.log(import.meta.env.VITE_CLIENT_ID);
  const [currentArtist, setCurrentArtist] = useState({
    name: "Linkin Park",
    followers: null,
    popularity: null,
    imageUrl:
      "https://townsquare.media/site/366/files/2014/12/Linkin-Park.jpg?w=980&q=75",
  });


  return (
    <>
      <div className="container">
        <img
          className="artist-image"
          src={currentArtist.imageUrl}
          alt="Artist Image"
        ></img>
        <div className="artist-info">
          <h2 className="artist-title">{currentArtist.name}</h2>
          {currentArtist.followers && (
            <p className="followers">Followers: {currentArtist.followers}</p>
          )}
          {currentArtist.popularity && (
            <p className="popularity">Popularity: {currentArtist.popularity}</p>
          )}
          <p className="genres">
            <em>
              Alternative rock, nu metal, alternative metal, rap, rock,
              electronic rock, pop rock
            </em>
          </p>
          <p>
            Linkin Park is an American rock band from Agoura Hills, California.
            The band's current lineup comprises vocalist/rhythm
            guitarist/keyboardist Mike Shinoda, lead guitarist Brad Delson,
            bassist Dave Farrell, DJ/turntablist Joe Hahn and drummer Rob
            Bourdon, all of whom are founding members. Vocalists Mark Wakefield
            and Chester Bennington are former members of the band. Categorized
            as alternative rock, Linkin Park's earlier music spanned a fusion of
            heavy metal and hip hop, while their later music features more
            electronica and pop elements.
          </p>
        </div>
      </div>
    </>
  );
};

export default ArtistDisplay;

// import {useState} from 'react'
// import "./style.css"

// const ArtistDisplay = () => {
//     const [currentArtist, setCurrentArtist] = useState('Linkin Park')

//     return (
//         <>
//         <div className="container">
//             <img className="artist-image" src="https://townsquare.media/site/366/files/2014/12/Linkin-Park.jpg?w=980&q=75" alt="Artist Image"></img>
//             <div className="artist-info">
//                 <h2 className="artist-title">{currentArtist}</h2>
//                 <p className="genres"><em>Alternative rock, nu metal, alternative metal, rap,  rock, electronic rock, pop rock</em></p>
//                 <p>Linkin Park is an American rock band from Agoura Hills, California. The band's current lineup comprises vocalist/rhythm guitarist/keyboardist Mike Shinoda, lead guitarist Brad Delson, bassist Dave Farrell, DJ/turntablist Joe Hahn and drummer Rob Bourdon, all of whom are founding members. Vocalists Mark Wakefield and Chester Bennington are former members of the band. Categorized as alternative rock, Linkin Park's earlier music spanned a fusion of heavy metal and hip hop, while their later music features more electronica and pop elements.</p>
//             </div>
//         </div>
//         </>
//     )
// }

// export default ArtistDisplay
