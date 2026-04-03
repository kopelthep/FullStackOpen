import { useState } from 'react'


const Button = ({onClick,text}) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}
const Title = ({text}) => {
  return(
    <h1>{text}</h1>

  )
}
const Ratings = ({good,neutral,bad}) => {
  return(
    <div>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
    </div>
  )

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const handleGoodRating = () => {
    setGood(good+1)
  }
  const handleNeutralRating = () => {
    setNeutral(neutral+1)
  }
  const handleBadRating = () => {
    setBad(bad+1)
  }

  return (
    <div>
      <Title text={"give feedback"}/>
      <Button onClick={handleGoodRating} text={"Good"}/>
      <Button onClick={handleNeutralRating} text={"Neutral"}/>
      <Button onClick={handleBadRating} text={"Bad"}/>
      <Title text={"statistics"}/>
      <Ratings good={good} neutral={neutral} bad = {bad}/>
    </div>
  )
}

export default App