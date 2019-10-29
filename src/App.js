import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Clock />
      </div>
    );
  }
}

class Clock extends Component {
  state = {
    date: new Date()
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    // Each hour, the hand move 30 (360/12) degrees
    const hoursDegrees = this.state.date.getHours() * 30 + this.state.date.getMinutes() / 10;
    // Each minute, the hand moves a 6 degree angle when second hand 
    const minutesDegrees = this.state.date.getMinutes() * 6 + this.state.date.getSeconds() / 10;
    // Each second, the hand moves a 6 degree angle
    const secondsDegrees = this.state.date.getSeconds() * 6;

    const divStyleHours = {
      transform: "translate(20px, 20px) rotateZ(" + hoursDegrees + "deg)"
    };

    const divStyleMinutes = {
      transform: "translate(20px, 20px)  rotateZ(" + minutesDegrees + "deg)"
    };

    const divStyleSeconds = {
      transform: "translate(20px, 20px) rotateZ(" + secondsDegrees + "deg)"
    };

    return (
      <div>
        <svg viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="19" class="pin" />
          <g class="marks">
            <line x1="15" y1="0" x2="16" y2="0" />
            <line x1="15" y1="0" x2="16" y2="0" />
            <line x1="15" y1="0" x2="16" y2="0" />
            <line x1="15" y1="0" x2="16" y2="0" />
            <line x1="15" y1="0" x2="16" y2="0" />
            <line x1="15" y1="0" x2="16" y2="0" />
            <line x1="15" y1="0" x2="16" y2="0" />
            <line x1="15" y1="0" x2="16" y2="0" />
            <line x1="15" y1="0" x2="16" y2="0" />
            <line x1="15" y1="0" x2="16" y2="0" />
            <line x1="15" y1="0" x2="16" y2="0" />
            <line x1="15" y1="0" x2="16" y2="0" />
          </g>
          <line x1="0" y1="0" x2="9" y2="0" class="hour" style={divStyleHours} />
          <line x1="0" y1="0" x2="13" y2="0" class="minute" style={divStyleMinutes} />
          <line x1="0" y1="0" x2="16" y2="0" class="seconds" style={divStyleSeconds} />
          <text x="0" y="0" class="clockName">
            #DONGHO
          </text>
        </svg>
      </div>
    );
  }
}

export default App;
