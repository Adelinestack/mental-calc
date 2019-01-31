import React, { Component } from 'react';
import Start from './Start';
import Game from './Game';
import End from './End';

import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameState: 'start',
      score: 0,
    };
  }
  startGame() {
    this.setState({
      gameState: 'play',
    });
  }
  onWinAddPointToScore() {
    this.setState(prevState => ({ score: prevState.score + 1 }));
  }

  endGame() {
    this.setState({
      gameState: 'end',
    });
  }
  restart() {
    this.setState({
      gameState: 'start',
      score: 0,
    });
  }

  render() {
    const { gameState } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Mental Calc Game !!</h1>
        </header>
        {gameState === 'start' && (
          <Start gameState={gameState} onClick={this.startGame.bind(this)} />
        )}
        {gameState === 'play' && (
          <Game
            gameState={gameState}
            endGame={this.endGame.bind(this)}
            onWinAddPointToScore={this.onWinAddPointToScore.bind(this)}
            score={this.state.score}
          />
        )}
        {gameState === 'end' && (
          <End
            gameState={gameState}
            onClick={this.restart.bind(this)}
            score={this.state.score}
          />
        )}
      </div>
    );
  }
}
