import React from 'react'
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown'
import '@leenguyen/react-flip-clock-countdown/dist/index.css'
 import './FlipCountClock.css';
const FlipCountClock = () => {
  return (
    <div className='flip'>
      <FlipClockCountdown 
      to={'2023-01-01T00:00:00'}
      className='flip-clock'
       />
    </div>
  )
}

export default FlipCountClock
