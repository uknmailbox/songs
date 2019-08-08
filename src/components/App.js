import React from 'react';
import SongList from './SongList';
import SelectedSong from './SelectedSong';

/*const App = () => {
  return <div>Hello React!</div>
}*/

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      songlist: [
        {name: "Hotel California", artist: "Eagles"},
        {name: "Champagne Supernova", artist: "Oasis"}
      ],
      selectedSong: {}
    }
  }

  setSelectedSong = (song) => {
    
    this.setState({
      selectedSong: song
    });
  }

  render() {
    let view = <h1>Please select a song</h1>;
    if (this.state.selectedSong.name && this.state.selectedSong.artist) {
      view = <SelectedSong song={this.state.selectedSong} />
    }
    return (
      <div>
        <SongList songlist={this.state.songlist} setSelectedSong={this.setSelectedSong}/>
        <br/>
        {view}
      </div>
    )
  }
}

export default App;
