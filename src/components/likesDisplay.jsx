import {useState} from 'react'
import '../styles/likesDisplay.css'
import likedLogo from '../assets/liked.svg'


export default function Likes(props) {
    const [currentLikes, setCurrentLikes] = useState(parseInt(props.likes))
    const [liked, setLiked] = useState(false)

    const handeClick = (e) => {
        if (liked) {
            setCurrentLikes(likes => likes - 1)
            setLiked(false)
        } else {
            setCurrentLikes(likes => likes + 1)
            setLiked(true)
        }
        
    }

    return (
        <>
            <div class='likes-container'>
                <h3 id='likes-display' >Likes: {currentLikes}</h3>
                <button
                    onClick={handeClick}
                >{liked ? "Unlike" : "Like"}</button>
                {liked ? 
                    <img width="25px" src={likedLogo} alt="" />
                : <></>
                }
            </div>
        </>
    )
}