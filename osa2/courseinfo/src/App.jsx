const Header = ({ name }) => {
  return (
    <>
      <h1>{name}</h1>
    </>
  )
}

const Content = ({ parts }) => {
  return (
    <>
      {parts.map(part =>
        <Part key={part.id} part={part} />
      )}
    </>
  )
}

const Part = ({ part }) => {
  return (
    <>
      <p>{part.name} {part.exercises}</p>
    </>
  )
}

const Total = (props) => {
  let exercises = props.exerciseAmount[0].exercises + props.exerciseAmount[1].exercises + props.exerciseAmount[2].exercises
  return (
    <>
      <p>Number of exercises {exercises} </p>
    </>
  )
}

const Course = ({ course }) => {

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      {/* <Total exerciseAmount={course.parts} /> */}
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App