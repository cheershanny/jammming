import './App.css';
import {Playlist} from './static_components/Playlist';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Jammein</h1>
        <Playlist />
      </header>
    </div>
  );
}

export default App;
