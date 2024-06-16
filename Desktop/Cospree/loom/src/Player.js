import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

const Player = ({ url }) => {
  const defaultUrl = 'https://www.youtube.com/watch?v=Bw7sg-7QCxQ&list=PLutcJfNEwNkSzUWW3NW3858GhsDJ5XYHV&index=1'; // Default video URL (Rick Astley's Never Gonna Give You Up)

  const [width, setWidth] = useState('600px'); 
  const [height, setHeight] = useState('400px'); 
  const [autoplay, setAutoplay] = useState(true); 

  useEffect(() => {
    setAutoplay(true);
  }, [url]);

  const handleWidthChange = (event) => {
    setWidth(event.target.value);
  };

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };
  const isValidUrl = (url && url.trim() !== '');

  return (
    <div>
      <div>
        <form>
          <label>
            Width:
            <input
              type="text"
              value={width}
              onChange={handleWidthChange}
            />
          </label>
          <label>
            Height:
            <input
              type="text"
              value={height}
              onChange={handleHeightChange}
            />
          </label>
        </form>
      </div>
      <ReactPlayer
        url={isValidUrl ? url : defaultUrl}
        controls={true}
        playing={autoplay} 
        width={width}
        height={height}
      />
    </div>
  );
};

export default Player;
