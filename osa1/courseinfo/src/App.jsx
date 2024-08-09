const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}


const App = () => {

  const name = "Tessa"
  const age = 8
  const friends = [
    { name: 'Peter', age: 4 },
    { name: 'Maya', age: 10 },
  ]

  const friendlist = ["jon", "bon", "jovi"]

  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Mark" age={10 + 10 + 10 + 3} />
      <Hello name={name} age={age} />
      <p>{friends[0]["name"]}, age {friends[0]["age"]}</p>
      <p>{friendlist}</p>
    </>
  )
}

export default App