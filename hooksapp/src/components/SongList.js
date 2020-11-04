import React, { useState,useEffect } from 'react';
import { v4 as uuidv4} from 'uuid'
import NewSongForm from './NewSongForm'

const SongList = () => {

   const [songs, setSongs] = useState([
        { title: 'Lemon', id: 1 },
        { title: '打上花火', id: 2 },
        { title: 'Loser', id: 3 },
   ])
    
    const addSong = (title) => {
        setSongs([...songs,{title, id:uuidv4()}])
    }

    const [age, setAge] = useState(18)

    useEffect(() => {
        console.log('useEffect函数运行中', songs);
    }, [songs])
    
    useEffect(() => {
        console.log('useEffect函数运行中', age);
    },[age])
    return ( 
        <div className="song-list">
            <ul>
                {songs.map(song => {
                    return (
                        <li key = { song.id}>{song.title}</li>
                    )
                })}
            </ul>
            <NewSongForm addSong={addSong} />
            <button onClick={() => setAge(age + 1)}>点击一次年龄加1:{age}</button>
        </div>
     );
}
 
export default SongList;