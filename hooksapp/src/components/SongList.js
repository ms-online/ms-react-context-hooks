import React, { useState } from 'react';
import { v4 as uuidv4} from 'uuid'

const SongList = () => {

   const [songs, setSongs] = useState([
        { title: 'Lemon', id: 1 },
        { title: '打上花火', id: 2 },
        { title: 'Loser', id: 3 },
   ])
    
    const addSong = () => {
        setSongs([...songs,{title: '春雷', id:uuidv4()}])
    }
    return ( 
        <div className="song-list">
            <ul>
                {songs.map(song => {
                    return (
                        <li key = { song.id}>{song.title}</li>
                    )
                })}
            </ul>
            <button onClick = {addSong}>添加歌曲</button>
        </div>
     );
}
 
export default SongList;