import React, { useState } from 'react';
import Player from './Player';
import './App.css';

const App = () => {
  const [url, setUrl] = useState('');
  const [inputUrl, setInputUrl] = useState('');

  const handleInputChange = (event) => {
    setInputUrl(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUrl(inputUrl);
  };

  return (
    <div className="Container">
      <header>
        <h1>Loom Player</h1>
          <div className="loom">
          <form onSubmit={handleSubmit} >
            <input
              type="text"
              placeholder="Enter video URL"
              value={inputUrl}
              onChange={handleInputChange}
            />
            <button type="submit">Submit</button>
          </form>
          <div className="line"></div>
          <Player url={url} />
          </div>
      </header>
    </div>
  );
};

export default App;
