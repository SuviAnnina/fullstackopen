import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      id: '1',
      number: '0401234567'
    },
    {
      name: 'Ada Lovelace',
      number: '39-44-5323523',
      id: '2'
    },
    {
      name: 'Mary Poppendick',
      number: '39-23-6423122',
      id: '3'
    },
    {
      name: 'Dan Abramov',
      number: '12-43-234345',
      id: '4'
    },
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')
  const [isFiltered, setIsFiltered] = useState(false)

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    if (event.target.value.length > 0) {
      setSearch(event.target.value)
      setIsFiltered(true)
    } else if (event.target.value.length === 0) {
      setSearch('')
      setIsFiltered(false)
    }
  }

  const addPerson = (event) => {
    event.preventDefault()

    if (nameExists(newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const personObject = {
        name: newName,
        id: String(persons.length + 1),
        number: newNumber
      }
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const nameExists = (name) => persons.map((person) => person.name.toLowerCase()).includes(name.toLowerCase())

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with
        <input
          value={search}
          onChange={handleSearchChange}
        />
      </div>

      <h2>Add new</h2>
      <form onSubmit={addPerson}>
        <div>
          name:
          <input
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          number:
          <input
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {isFiltered
          ? <div>{persons.filter((person) => person.name.toLowerCase().includes(search.toLowerCase())).map((person) => <p key={person.id}>{person.name} {person.number}</p>)} </div>
          : <div>{persons.map((person) =>
            <p key={person.id}>{person.name} {person.number}</p>
          )}
          </div>}
      </div>

    </div>
  )
}

export default App