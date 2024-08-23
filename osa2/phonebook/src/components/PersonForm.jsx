import personService from '../services/persons'

const nameExists = (name, persons) => {
    return persons.map((person) => person.name.toLowerCase()).includes(name.toLowerCase())
}

const PersonForm = ({ data, persons, setPersons }) => {
    const addPerson = (event) => {
        event.preventDefault()

        if (nameExists(data.newName, persons)) {
            alert(`${data.newName} is already added to phonebook`)
        } else {
            const personObject = {
                name: data.newName,
                id: String(persons.length + 1),
                number: data.newNumber
            }
            personService
                .create(personObject)
                .then(returnedPerson => {
                    setPersons(persons.concat(returnedPerson))
                })

            data.setNewName('')
            data.setNewNumber('')
        }
    }

    return (
        <form onSubmit={addPerson}>
            <div>
                Name:
                <input
                    value={data.newName}
                    onChange={data.handleNameChange}
                />

            </div>
            <div>
                Number:
                <input
                    value={data.newNumber}
                    onChange={data.handleNumberChange}
                />

            </div>
            <div>
                <button type="submit">Add</button>
            </div>
        </form>
    )
}

export default PersonForm