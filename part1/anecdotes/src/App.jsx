import { use, useState } from 'react'
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const Button = ({onClick,text}) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}
const DisplayVotes = ({voted}) => {
  return (
    <p>
      has {voted} votes
    </p>
  )
}
const DisplayAnnecdote = ({anecdote}) => {
  return(
    <>
    {anecdote}
    </>
  )
}

const Title = ({text}) => {
  return(
    <h1>{text}</h1>

  )
}

//Utility function taken fully from https://stackoverflow.com/questions/11301438/return-index-of-greatest-value-in-an-array
function indexOfMax(arr) {
    if (arr.length === 0) {
        return -1;
    }

    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex;
}



const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes,setVotes] = useState(Array(anecdotes.length).fill(0))
  const chooseAnecdote = () => {
    //console.log("anecdotes length",anecdotes.length)
    let toSet = getRandomInt(anecdotes.length)
    //console.log("toset", toSet)
    setSelected(toSet)
    //console.log("test", votes)
  }
  //chooseAnecdote()
  const addVote = ()=> {
    const copy = [ ...votes ]
    //console.log("copy",copy)
    copy[selected] += 1
    //console.log("updated votes",copy)
    setVotes(copy)
  }

  const maxVoteIndex = indexOfMax(votes)
  //console.log("Biggest number of votesindex",maxVoteIndex,"value",votes[maxVoteIndex])

  return (
    <div>
      <Title text={"Anecdote of the day"}/>
      <DisplayAnnecdote anecdote={anecdotes[selected]}/>
      <DisplayVotes voted={votes[selected]}/>
      <p>
        <Button onClick={chooseAnecdote} text={"Next anecdote"} />
        <Button onClick={addVote} text={"Vote"}/>
      </p>
      <Title text={"Anecdote with the most votes"}/>
      <DisplayAnnecdote anecdote={anecdotes[maxVoteIndex]}/>
      <DisplayVotes voted={votes[maxVoteIndex]}/>

      

    </div>
  )
}
// Small note, this could for bigger stuff be more efficient to do overall by simply keeping track on vote of each is "at the top" 
// so that it only has to check against the one in memory but here it seems unnecessary and an overcomplication
export default App