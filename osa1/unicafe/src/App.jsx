import { useState } from 'react'

const Header = (props) => <h1>{props.title}</h1>
const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

const Display = (props) => {
  return (
    <>
      <p>good {props.givenFeedback.good}</p>
      <p>neutral {props.givenFeedback.neutral}</p>
      <p>bad {props.givenFeedback.bad}</p>
      <p>all {props.givenFeedback.all}</p>
      <p>average {props.givenFeedback.average()}</p>
      <p>positive {props.givenFeedback.positive()} %</p>
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const titles = {
    "feedback": "give feedback",
    "stats": "statistics"
  }
  const buttonText = {
    "good": "good",
    "bad": "bad",
    "neutral": "neutral"
  }

  const allFeedback = good + neutral + bad

  const givenFeedback = {
    "good": good,
    "neutral": neutral,
    "bad": bad,
    "all": allFeedback,
    "average": function () {
      return (good - bad) / allFeedback
    },
    "positive": function () {
      return (good / allFeedback) * 100
    }
  }

  const handleClickGood = () => setGood(good + 1)
  const handleClickNeutral = () => setNeutral(neutral + 1)
  const handleClickBad = () => setBad(bad + 1)

  return (
    <div>
      <Header title={titles.feedback} />
      <Button text={buttonText.good} onClick={handleClickGood} />
      <Button text={buttonText.neutral} onClick={handleClickNeutral} />
      <Button text={buttonText.bad} onClick={handleClickBad} />

      <Header title={titles.stats} />
      <Display givenFeedback={givenFeedback} />
    </div>
  )
}

export default App