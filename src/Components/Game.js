import React, { Component } from 'react';
import Timer from './Timer';
import './game.css';

const signList = ['+', '-', '*', '/'];

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calcTab: [],
      answer: '',
      seconds: 15,
    };
  }
  componentDidMount() {
    this.generateCalc();

    this.gameStart();
  }

  gameStart() {
    this.intervalId = setInterval(() => {
      this.setState(prevState => ({
        seconds: prevState.seconds - 1,
      }));
      this.isGameEnd();
    }, 1000);
  }

  isGameEnd() {
    if (this.state.seconds === 0) {
      clearInterval(this.intervalId);
      this.setState({ seconds: 15 });
      this.props.endGame();
    }
  }

  getRandomCalcSign() {
    return signList[Math.floor(Math.random() * signList.length)];
  }

  generateCalc() {
    const sign = this.getRandomCalcSign();
    const randomFirstNumber = Math.floor(Math.random() * 10);
    const randomSecondNumber = Math.floor(Math.random() * 10);
    const calc = `${randomFirstNumber}${sign}${randomSecondNumber}`;
    const result = eval(calc);
    this.setState({ calcTab: [calc, result] });
  }

  getResponse({ target: { value: answer } }) {
    this.setState({ answer });
  }

  checkAnswer() {
    this.setState(prevState => {
      if (Number(prevState.answer) === prevState.calcTab[1]) {
        this.props.onWinAddPointToScore();
        return { answer: '' };
      }
      return { answer: '' };
    });
    this.generateCalc();
  }

  onKeyPress({ key }) {
    if (key === 'Enter') {
      this.checkAnswer();
    }
    return null;
  }
  onTryClick() {
    this.checkAnswer();
  }

  render() {
    const { gameState, score } = this.props;
    const { answer, calcTab } = this.state;
    return (
      <div>
        <p>Game on !</p>
        <Timer seconds={this.state.seconds} />
        <p className="calcul">{calcTab[0]}</p>
        <label>Answer</label>
        <input
          value={answer}
          onChange={this.getResponse.bind(this)}
          onKeyPress={this.onKeyPress.bind(this)}
        />
        <button onClick={this.onTryClick.bind(this)}>Try</button>
        <div>Score : {score}</div>
      </div>
    );
  }
}
