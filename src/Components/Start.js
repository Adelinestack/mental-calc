import React from 'react';

export default function Start({ gameState, onClick }) {
  return (
    <div>
      <h2>Guess the results in 15 seconds !</h2>
      <button onClick={onClick}>Start</button>
    </div>
  );
}
