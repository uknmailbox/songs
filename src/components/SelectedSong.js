import React from 'react';

const SelectedSong = (props) => {
    const song = props.song;

    return (
        <div>
            <h3>You have selected</h3>
            <h1>{song.name} by {song.artist}</h1>
        </div>
    )
}

export default SelectedSong;