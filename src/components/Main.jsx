import { useState } from 'react'

export default function Main() {

  const [message, setMessage] = useState("")
  const [colorsState, setColorsState] = useState(getColorsObject())

  const handleButtonClick = e => {
    const button = e.target.className
    let id = 0

    if (button === 'buttonTwo') {
      id = 1
    } else if (button === 'buttonThree') {
      id = 2
    }

    if (colorsState.boxColor === colorsState.buttons[id]) {
      setMessage("Correct! Next game :)")
    } else {
      setMessage("Incorrect! :( Try again")
    }

    setColorsState(getColorsObject())
  }

  return (
    <main>
      <div className="main-box" style={{backgroundColor: colorsState.boxColor}}>
      </div>
      <h2 className="message">{message}</h2>
      <button
        className="buttonOne"
        onClick={handleButtonClick}
        style={{backgroundColor: colorsState.buttons[0]}}>
          {colorsState.buttons[0]}
      </button>
      <button
        className="buttonTwo"
        onClick={handleButtonClick}
        style={{backgroundColor: colorsState.buttons[1]}}>
          {colorsState.buttons[0]}
      </button>
      <button
        className="buttonThree"
        onClick={handleButtonClick}
        style={{backgroundColor: colorsState.buttons[2]}}>
          {colorsState.buttons[0]}
      </button>
    </main>
  )
}

/**
 * Computes a random hex color and returns it
 * @returns String A random hex color
 */
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

/**
 * Assembles a colors object to use with the colorsState state
 * @returns Object The colors object
 */
function getColorsObject() {
  const colors = {
    buttons :[
      getRandomColor(),
      getRandomColor(),
      getRandomColor()
    ]
  }
  const pickColor = Math.floor(Math.random() * 3)
  colors.boxColor = colors.buttons[pickColor]

  return colors
}