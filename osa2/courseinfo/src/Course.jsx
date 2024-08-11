const Header = ({ name }) => {
    return (
        <>
            <h2>{name}</h2>
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

const Total = ({ parts }) => {
    let exercisesArray = parts.map((exercise) => exercise.exercises)
    let totalExercises = exercisesArray.reduce((start, value) => start + value, 0)
    return (
        <>
            <p><b>Total number of exercises {totalExercises}</b></p>
        </>
    )
}

const Course = ({ courses }) => {
    return (
        <div>
            <h1>Web development curriculum</h1>
            {courses.map(course => (
                <div key={course.id}>
                    <Header name={course.name} />
                    <Content parts={course.parts} />
                    <Total parts={course.parts} />
                </div>
            ))}
        </div>
    )
}

export default Course