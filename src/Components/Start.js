import React, { Component } from 'react';

export default function Start({ gameState, onClick }) {
  return (
    <div>
      <p>Guess the results in 15 seconds !</p>
      <button onClick={onClick}>Start</button>
    </div>
  );
}
