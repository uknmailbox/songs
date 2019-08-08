import React from 'react';

const SongList = (props) => {
    const songList = props.songlist;
    let setSelectedSong = props.setSelectedSong;
    
    const view = <ul>
        {
            songList.map((song, index) => {
                return (
                    <li key={index}>
                        <div>
                            <label>{song.name} - {song.artist}</label>&nbsp;
                            <button 
                                style={{backgroundColor: 'blue', color: 'white'}} 
                                onClick={() => setSelectedSong(song)}>Select</button>
                        </div>
                    </li>
                )
            })
        }
    </ul>

    console.log(view);

    return view;
}

export default SongList;