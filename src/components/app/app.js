import React from "react";
import StopWatch from "../stopwatch/stopwatch";
import { connect } from "react-redux";

const App = (props) => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  const secondHandRotate = {
    transform: `rotate(${props.seconds * 6}deg) translateX(-50%)`,
  };

  const minuteHandRotate = {
    transform: `rotate(${props.minutes * 6}deg) translateX(-50%)`,
    transition: "0.1s all linear",
  };

  return (
    <>
      <section className="container main-page">
        <div className="analog_stopwatch">
          <div className="analog_stopwatch__black-circle" />
          <div className="analog_stopwatch__red-circle" />
          <div
            className="analog_stopwatch__second-hand"
            style={secondHandRotate}
          />
          <div
            className="analog_stopwatch__minute-hand"
            style={minuteHandRotate}
          />
        </div>
        <h1 className="title">Stopwatch</h1>
        <StopWatch />
      </section>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    seconds: state.secondHand,
    minutes: state.minuteHand,
  };
};

export default connect(mapStateToProps)(App);
