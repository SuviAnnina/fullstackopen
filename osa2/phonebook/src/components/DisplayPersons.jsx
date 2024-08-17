const DisplayPersons = ({ isFiltered, persons, search }) => {
    return (
        <div>
            {isFiltered
                ? <div>{persons.filter((person) => person.name.toLowerCase().includes(search.toLowerCase())).map((person) => <PersonLine key={person.id} person={person} />)} </div>
                : <div>{persons.map((person) =>
                    <PersonLine key={person.id} person={person} />
                )}
                </div>}
        </div>
    )
}

const PersonLine = ({ person }) => {
    return (
        <div>
            {person.name} {person.number}
        </div>
    )
}

export default DisplayPersons