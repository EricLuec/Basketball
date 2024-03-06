import React, { useState } from 'react';
import Liste from './liste';

const ScoreTracker = () => {
  const [name, setName] = useState('');
  const [points, setPoints] = useState(0);
  const [lastScore, setLastScore] = useState(0);
  const [clickCount, setClickCount] = useState(0);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const increasePoints = () => {
    const randomPoints = Math.floor(Math.random() * 3);
    setPoints(points + randomPoints);
    setLastScore(randomPoints);
    setClickCount(clickCount + 1);

    if (points >= 12) {
      alert(`${name} hat gewonnen und hat ${clickCount} Würfe gebraucht.`);
      setPoints(0);
      setClickCount(0);
    }
  };


  const progressBarWidth = `${(points / 12) * 100}%`;
  

  return (
    <div>

      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Gib deinen Namen ein"
      />
      <p>
        {name} hat {points} Punkte.
      </p>

      <div style={{ backgroundColor: 'lightgray', height: '20px' }}>
        <div
          style={{
            width: progressBarWidth,
            backgroundColor: 'green',
            height: '100%',
          }}
        ></div>
      </div>
      <button onClick={increasePoints}>Werfen</button>
    </div>
  );
};

export default ScoreTracker;
