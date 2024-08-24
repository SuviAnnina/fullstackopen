import personService from '../services/persons'

const DisplayPersons = ({ isFiltered, persons, setPersons, search }) => {

    const handleDelete = (id, name) => {
        if (window.confirm(`Delete ${name}?`)) {
            personService
                .remove(id)
                .then(() => {
                    setPersons(persons.filter(person => person.id !== id))
                })
        }
    }

    const filteredPersons = isFiltered
        ? persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))
        : persons


    return (
        <div>
            {filteredPersons.map((person) =>
                <PersonLine
                    key={person.id}
                    person={person}
                    handleDelete={handleDelete}
                />
            )}
        </div>
    )
}



const PersonLine = ({ person, handleDelete }) => {
    return (
        <div>
            {person.name} {person.number} <button onClick={() => { handleDelete(person.id, person.name) }} >Delete</button>
        </div>
    )
}

export default DisplayPersons