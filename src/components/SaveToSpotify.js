const getUserId = async (accessToken) => {
  const response = await fetch("https://api.spotify.com/v1/me", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const data = await response.json();
  return data.id;
};

const createPlaylist = async (accessToken, userId, playlistName) => {
  const response = await fetch(
    `https://api.spotify.com/v1/users/${userId}/playlists`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: playlistName,
        description: "Custom playlist created by Jammming",
        public: true,
      }),
    }
  );
  const data = await response.json();
  return data.id;
};

const addTracksToPlaylist = async (
  accessToken,
  userId,
  playlistId,
  trackUris
) => {
  await fetch(
    `https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uris: trackUris,
      }),
    }
  );
};

export const SaveToSpotify = async (props) => {
  const accessToken = props.accessToken;
  const playlistName = props.playlistName;
  const playlistTracks = props.playlistTracks;

  const userId = await getUserId(accessToken);
  const playlistId = await createPlaylist(accessToken, userId, playlistName);
  const trackUris = playlistTracks.map(
    (track) => track.uri
  );
  await addTracksToPlaylist(accessToken, userId, playlistId, trackUris);
};
