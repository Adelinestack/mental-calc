import React, { Component } from 'react';

export default function End({ gameState, onClick, score }) {
  return (
    <div>
      <p>End of Game</p>
      <p>You had {score} good answers !</p>
      <button onClick={onClick}>Restart</button>
    </div>
  );
}
