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

  const deleteItem = (id) => {
    axios.delete(`/gallery/delete/${id}`)
      .then((response) => {
        getGallery()
      }).catch((error) => {
        console.log(error);
      })
  }

  return (
    <div className="App">
      <GalleryList
        gallery={gallery}
        likeUpdate={likeUpdate}
        deleteItem={deleteItem}
      />
    </div>
  );
}

export default App;
