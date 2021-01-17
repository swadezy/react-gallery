import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import GalleryList from '../GalleryList/GalleryList.jsx';

function App() {

  const [gallery, setGallery] = useState([]);

  useEffect(() => getGallery(), []);

  const getGallery = () => {
    axios.get('/gallery')
      .then((response) => setGallery(response.data))
      .catch((error) => console.log(error));
  }

  const likeUpdate = (id) => {
    axios.put(`/gallery/like/${id}`)
      .then((response) => {
        getGallery()
      }).catch((error) => {
        console.log(error);
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <GalleryList
        gallery={gallery}
        likeUpdate={likeUpdate}
      />
    </div>
  );
}

export default App;
