import personService from '../services/persons'

const nameExists = (name, persons) => {
    return persons.map((person) => person.name.toLowerCase()).includes(name.toLowerCase())
}

const PersonForm = ({ data, persons, setPersons }) => {
    const clearInputFields = () => {
        data.setNewName('')
        data.setNewNumber('')
    }

    const addPerson = (event) => {
        event.preventDefault()

        if (nameExists(data.newName, persons)) {
            if (window.confirm(`${data.newName} is already added, replace the number with new one?`)) {

                const updatePerson = persons.find(person => person.name === data.newName)
                const updatedPersonObject = {
                    ...updatePerson, number: data.newNumber
                }

                personService
                    .update(updatePerson.id, updatedPersonObject)
                    .then(returnedPerson => {
                        setPersons(persons.map(person => person.id !== updatePerson.id ? person : returnedPerson))
                    })
                    .catch(error => {
                        alert('Failed to update')
                        console.log('Error in updating an existing person: ', error)
                    })

                clearInputFields()
            } else {
                clearInputFields()
                return
            }
        } else {
            const personObject = {
                name: data.newName,
                //id: String(persons.length + 1),
                number: data.newNumber
            }
            personService
                .create(personObject)
                .then(returnedPerson => {
                    setPersons(persons.concat(returnedPerson))
                })
                .catch(error => {
                    alert('Failed to add a new person to phonebook')
                    console.log('Failed to add a new person to phonebook: ', error)
                })
            clearInputFields()
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