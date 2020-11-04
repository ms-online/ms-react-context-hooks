import React,{ useState } from 'react'

const NewSongForm = ({addSong}) => {
    const [title, setTitle] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        addSong(title)
        setTitle('')
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <label>歌曲名称：</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <input type="submit" value="添加歌曲"/>
        </form>
     );
}
 
export default NewSongForm;