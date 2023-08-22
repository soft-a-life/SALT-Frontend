import React, { useEffect, useState } from 'react'

// eslint-disable-next-line react/prop-types
function Timer({ timeOut }) {
  const [minutes, setMinutes] = useState(5)
  const [seconds, setSeconds] = useState(0)
  useEffect(() => {
    const countdown = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1) 
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(countdown)
        } else {
          setMinutes(minutes - 1)
          setSeconds(59)
        }
      }
      if (minutes === 0 && seconds === 0) {
        timeOut()
      }
    }, 1000)
    return () => clearInterval(countdown)
  }, [minutes, seconds])
  return (
    <div style={{ display: 'flex' }}>
      0{minutes} : {seconds}
    </div>
  )
}

export default Timer
