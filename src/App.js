import Home from './components/Home'
import Navbar from './components/navbar'
import SearchPage from './components/searchpage'
import Login from './components/login'
import { useEffect, useState } from "react"
import { getTokenFromUrl } from './components/spotify'
import SpotifyWebApi from "spotify-web-api-js"
import Player from "./components/player"
import { useDataLayerValue } from "./DataLayer"


const spotify = new SpotifyWebApi()

function App() {

  const [{user, token }, dispatch] = useDataLayerValue();


  
  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })

      spotify.setAccessToken(_token)

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user
        })
      })

      spotify.getUserPlaylists().then((playlists) =>{
      dispatch({
        type: "SET_PLAYLIST",
        playlists: playlists,
      })
      })
    }
  }, [])


  return (
    <div className="flex"> 
      {
        token ? (
          <Player />
        ) : (
            <Login />
        )
      }
           
    </div>
  );
}

export default App;
