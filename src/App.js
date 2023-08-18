import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Unstable_Grid2";

import "./App.css";
import { Playlist } from "./components/Playlist";
import { SearchResults } from "./components/SearchResults";
import { SearchBar } from "./components/SearchBar";
import { SaveToSpotify } from "./components/SaveToSpotify";
import {
  getAccessToken,
  clearAccessTokenFromUrl,
} from "./components/spotifyAuth";



function App() {
  const [playlist, setPlaylist] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [accessToken, setAccessToken] = useState("");
  const [playlistName, setPlaylistName] = useState("My Playlist");
  const [isPlaylistSaved, setIsPlaylistSaved] = useState(false);

  const handleSearchResultsChange = (results) => {
    setSearchResults(results);
  };

  const handlePlaylistNameChange = (inputName) => {
    setPlaylistName(inputName);
  };

  const addTrack = (track) => {
    if (!playlist.some((playlistTrack) => playlistTrack.id === track.id)) {
      const newPlaylist = [...playlist, track];
      setPlaylist(newPlaylist);
    }
  };

  const removeTrack = (track) => {
    const newPlaylist = playlist.filter(
      (playlistTrack) => playlistTrack !== track
    );
    setPlaylist(newPlaylist);
  };

  useEffect(() => {
    getAccessToken()
      .then((accessToken) => {
        console.log("Access Token:", accessToken);
        setAccessToken(accessToken);
        clearAccessTokenFromUrl();
      })
      .catch((error) => {
        console.log(error);
        clearAccessTokenFromUrl();
      });
  }, []);

  const handleSaveToSpotify = async () => {
    try {
      if (!accessToken) {
        console.error("Access token not available.");
        return;
      }

      await SaveToSpotify({
        accessToken: accessToken,
        playlistName: playlistName,
        playlistTracks: playlist,
      });
      console.log("Playlist saved successfully!");
      setIsPlaylistSaved(true);
    } catch (error) {
      console.error("Error saving playlist:", error);
    }
  };

  

  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Jammmmming</h1>
      </header>

      <body>
        <Grid container spacing={1}>
          <Grid xs={12}>
            <SearchBar
              className="SearchBar"
              accessToken={accessToken}
              onSearchResultsChange={handleSearchResultsChange}
            />
          </Grid>

          <Grid xs={6}>
            <SearchResults
              className="SearchResults"
              searchResults={searchResults}
              onAddTrack={addTrack}
            />
          </Grid>

          <Grid xs={6}>
            <Playlist
              className="Playlist"
              playlist={playlist}
              onRemoveTrack={removeTrack}
              onPlaylistNameChange={handlePlaylistNameChange}
            />
            <button onClick={handleSaveToSpotify}>Save to Spotify</button>
            {isPlaylistSaved && <p id='successful_message'>Playlist saved successfully! 😉 🍀</p>}
          </Grid>
        </Grid>
      </body>
    </div>
  );
}

export default App;
