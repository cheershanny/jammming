import './App.css';
import {Playlist} from './static_components/Playlist';
import {SearchBar} from './static_components/SearchBar';
import {SearchResults} from './static_components/SearchResults';
import {Track} from './static_components/Track';
import {Tracklist} from './static_components/Tracklist';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Jammein</h1>
      </header>
      <body>
        <Playlist className='Playlist'/>
        <SearchBar className='SearchBar'/>
        <SearchResults className='SearchResults'/>
        <Track className='Track'/>
        <Tracklist className='Tracklist'/>
      </body>
    </div>
  );
}

export default App;
