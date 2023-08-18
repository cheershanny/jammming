import { TrackItemAtPlaylist } from "./TrackItem";
import { useState } from "react";

export const Playlist = (props) => {
  const [newPlaylistName, setNewPlaylistName] = useState("My Playlist");
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSave = (e) => {
    e.preventDefault();
    setNewPlaylistName(input);
    props.onPlaylistNameChange(input);
    setInput("");
    
  };

  return (
    <div className={props.className}>
      <h2>{newPlaylistName}</h2>
      <form>
        <label htmlFor="playlistName"></label>
        <input
          id="playlistName"
          placeholder="Enter Playlist Name"
          value={input}
          onChange={handleInputChange}
        />
        <button onClick={handleSave}>Save</button>
      </form>
      <div>
        {props.playlist.map((track) => (
          <TrackItemAtPlaylist
            key={track.id}
            track={track}
            onRemoveTrack={props.onRemoveTrack}
          />
        ))}
      </div>
    </div>
  );
};
