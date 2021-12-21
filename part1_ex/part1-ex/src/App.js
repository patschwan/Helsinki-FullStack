// { useState } from "react" ist der Hook
import React, { useState } from "react";

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>the app is used by pressing the buttoons</div>
    )
  }
  // if Bedingung nicht erfüllt, das ist der Default!
  // falls die if bedingung falsch ist, wird der Default angezeigt
  // hatte legnth geschrieben und der Default wurde angezeigt (kein Fehler!)
  return (
    <div>button press History: {props.allClicks.join('')}</div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    // don't use allClicks.push('L')
    // mutating state directly can lead to 
    // hard debug errors in more complex scenarios
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    // don't use allClicks.push('R')
    // mutating state directly can lead to 
    // hard debug errors in more complex scenarios
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text='left' />
      <Button handleClick={handleRightClick} text='right' />
      {right}
      <History allClicks={allClicks} />
    </div>
  )
}

export default App;
