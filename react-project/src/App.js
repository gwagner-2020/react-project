import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    axios.get('https://api.artic.edu/api/v1/artworks')
    .then(response => {
        setArtworks(response.data);
      }
    )
      .catch(error => {
        console.error(error);
      });
  }, []);

  console.log(artworks.pagination);
  console.log(artworks.data);
  const artworksArray = artworks.data;
  console.log('artworksArray:', artworksArray);

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <ul>
      {artworksArray.map(artwork=> (
        <li key={artwork.id}>{artwork.artist_display}, {artwork.title}</li>
      ))}
      </ul>
    </div>
  );
}

export default App;
