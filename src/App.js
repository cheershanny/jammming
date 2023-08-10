import './App.css';
import {Playlist} from './static_components/Playlist';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Jammein</h1>
      </header>
      <body>
        <Playlist />
        {/* <SearchBar />
        <SearchResult />
        <Track />
        <Tracklist /> */}
      </body>
    </div>
  );
}

export default App;
