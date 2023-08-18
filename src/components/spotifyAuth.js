const SPOTIFY_CLIENT_ID = '61f9971e330b443da0a56a327780522c'; 
const SPOTIFY_REDIRECT_URI = 'http://localhost:3000/callback'; 

const getAccessTokenFromUrl = () => {
  const urlParams = new URLSearchParams(window.location.hash.substring(1));
  return urlParams.get('access_token');
};

const hasAccessToken = () => {
  const accessToken = getAccessTokenFromUrl();
  return accessToken !== null;
};

const clearAccessTokenFromUrl = () => {
  window.location.hash = '';
};

const redirectToSpotifyLogin = () => {
  const authUrl = `https://accounts.spotify.com/authorize?client_id=${SPOTIFY_CLIENT_ID}&response_type=token&redirect_uri=${encodeURIComponent(SPOTIFY_REDIRECT_URI)}&scope=user-read-private%20user-read-email%20playlist-modify-public%20playlist-modify-private`;
  window.location = authUrl;
};

const getAccessToken = () => {
  if (hasAccessToken()) {
    return Promise.resolve(getAccessTokenFromUrl());
  } else {
    redirectToSpotifyLogin();
    return Promise.reject('Access token not found');
  }
};

export { getAccessToken, clearAccessTokenFromUrl };
