import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

import GalleryList from '../GalleryList/GalleryList.jsx';

function App() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList />
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
