import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from '@mui/icons-material/Remove';

import "../App.css";

export const TrackItemAtSearch = (props) => {

  return (
    <div className="TrackItem">
      <h3>{props.track.name}</h3>
      <p>Artist: {props.track.artist}</p>
      <p>Album: {props.track.album}</p>
      <AddIcon onClick={() => props.onAddTrack(props.track)}></AddIcon>
    </div>
  );
};

export const TrackItemAtPlaylist = (props) => {
    const handleClickRemove = () => {
        props.onRemoveTrack(props.track);
    };

    return (
        <div className='TrackItem'>
            <h3>{props.track.name}</h3>
            <p>Artist: {props.track.artist}</p>
            <p>Album: {props.track.album}</p>
            <RemoveIcon onClick={handleClickRemove}></RemoveIcon>
        </div>

    )
}
