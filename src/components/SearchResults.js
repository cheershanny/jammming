import { TrackItemAtSearch } from "./TrackItem";
import React from "react";

export const SearchResults = (props) => {
  return (
    <div className={props.className}>
      <h2>Is this what you searched for?</h2>
      <div>
        {props.SearchResults === ""
          ? ""
          : props.searchResults.map((track) => (
              <div key={track.id}>
                <TrackItemAtSearch track={track} onAddTrack={props.onAddTrack} />
              </div>
            ))}
      </div>
    </div>
  );
};
