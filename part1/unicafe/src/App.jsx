import { useState } from 'react'
import { div } from 'three/tsl'


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

const Statistics = ({good,neutral,bad}) => {
  const allRatings = good + neutral + bad
  let average = 0
  if (allRatings == 0) {
    return (
      <div>
        No feedback Given
      </div>
    )
  }
  if (allRatings > 0) {
    average = (good-bad)/allRatings
  }
  console.log("allratings",allRatings)
  console.log(average)

  let positive = 0
  if (allRatings > 0) {
    positive = ((good)/allRatings) * 100
  }
  
  return(
    <div>
      <div>Good {good}</div>
      <div>Neutral {neutral}</div>
      <div>Bad {bad}</div>
      <div>All {good+neutral+bad}</div>
      <div>Average: {average}</div>
      <div>Positive: {positive} %</div>
    </div>
    
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  //const [allRatings, setAllRatings] = useState(0)
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
      
      <Statistics good={good} neutral={neutral} bad = {bad}/>

    </div>
  )
}

export default App