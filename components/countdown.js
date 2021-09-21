import React from 'react'
import { CountdownCircleTimer } from "react-countdown-circle-timer";


const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
  isPlaying: true,
  size: 120,
  strokeWidth: 6
};

const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper">
      <div style={{fontSize: '32px'}}>{time}</div>
      <div>{dimension}</div>
    </div>
  );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

function Countdown() {
  const startTime = Date.now() / 1000;
  const endTime = startTime + 243248; //243248;

  const remainingTime = endTime - startTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;
  return (
    <>
      <CountdownCircleTimer
        {...timerProps}
        size={80}
        colors={[["#5EC2B7"]]}
        duration={daysDuration}
        initialRemainingTime={remainingTime}
      >
        {({ elapsedTime }) =>
          renderTime("days", getTimeDays(daysDuration - elapsedTime))
        }
      </CountdownCircleTimer>

      <CountdownCircleTimer
        {...timerProps}
        size={80}
        colors={[["#20B0C5"]]}
        duration={daySeconds}
        initialRemainingTime={remainingTime % daySeconds}
        onComplete={(totalElapsedTime) => [
          remainingTime - totalElapsedTime > hourSeconds
        ]}
      >
        {({ elapsedTime }) =>
          renderTime("hours", getTimeHours(daySeconds - elapsedTime))
        }
      </CountdownCircleTimer>

      <CountdownCircleTimer
        {...timerProps}
        size={80}
        colors={[["#527FC4"]]}
        duration={hourSeconds}
        initialRemainingTime={remainingTime % hourSeconds}
        onComplete={(totalElapsedTime) => [
          remainingTime - totalElapsedTime > minuteSeconds
        ]}
      >
        {({ elapsedTime }) =>
          renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime))
        }
      </CountdownCircleTimer>

      <CountdownCircleTimer
        {...timerProps}
        size={80}
        colors={[["#953E7B"]]}
        duration={minuteSeconds}
        initialRemainingTime={remainingTime % minuteSeconds}
        onComplete={(totalElapsedTime) => [
          remainingTime - totalElapsedTime > 0
        ]}
      >
        {({ elapsedTime }) =>
          renderTime("seconds", getTimeSeconds(elapsedTime))
        }
      </CountdownCircleTimer>

    </>
  )
}

export default Countdown
