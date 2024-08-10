import { useState } from 'react'

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>
const Anecdote = (props) => <p>{props.anecdote}</p>
const DisplayVotes = (props) => <p>has {props.votes} votes</p>
const Title = (props) => <h1>{props.text}</h1>

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
  const randomNumber = () => Math.floor(Math.random() * anecdotes.length)
  const newAnecdote = () => setSelected(randomNumber())
  const [votes, setVotes] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0
  })
  const titles = {
    "anecdoteDay": "Anecdote of the day",
    "anecdoteVotes": "Anecdote with most votes"
  }

  const handleVote = () => {
    setVotes({
      ...votes,
      [selected]: votes[selected] + 1
    })
  }

  const mostVoted = () => {
    let highestKey = 0
    let highestValue = 0

    Object.entries(votes).forEach(([key, value]) => {
      if (value > highestValue) {
        highestKey = key
        highestValue = value
      }
    })
    return [highestKey, highestValue]
  }
  let [highestVotedIndex, highestVotedValue] = mostVoted()

  return (
    <div>
      <Title text={titles.anecdoteDay} />
      <Anecdote anecdote={anecdotes[selected]} />
      <DisplayVotes votes={votes[selected]} />
      <Button onClick={handleVote} text={"vote"} />
      <Button onClick={newAnecdote} text={"next anecdote"} />
      <Title text={titles.anecdoteVotes} />
      <Anecdote anecdote={anecdotes[highestVotedIndex]} />
      <DisplayVotes votes={votes[highestVotedIndex]} />
    </div>
  )
}

export default App