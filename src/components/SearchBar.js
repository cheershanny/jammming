import React, { useState } from "react";
import debounce from "lodash/debounce";

export const SearchBar = (props) => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    const apiUrl = `https://api.spotify.com/v1/search?type=track&q=${searchQuery}`;

    fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${props.accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("API Response:", data);
        const tracks = data.tracks.items.map((item) => ({
          id: item.id,
          name: item.name,
          artist: item.artists.map((artist) => artist.name).join(", "),
          album: item.album.name,
          uri: item.uri,
        }));
        setSearchResults(tracks);
        props.onSearchResultsChange(tracks);
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
      });
  };

  const debouncedHandleSearch = debounce(handleSearch, 300);

  const handleInputChange = (e) => {
    const searchingInput = e.target.value;
    setSearchInput(searchingInput);
    setSearchQuery(encodeURIComponent(searchingInput));
    debouncedHandleSearch();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch();
    }
  }

  return (
    <form className={props.className}>
      <label htmlFor="search"></label>
      <input
        type="search"
        id="search"
        placeholder="Search for song, artist, album"
        value={searchInput}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch} type="button">
        Search
      </button>
    </form>
  );
};
