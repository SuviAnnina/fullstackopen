import { useState } from 'react'
import Filter from './components/Filter'
import DisplayPersons from './components/DisplayPersons'
import PersonForm from './components/PersonForm'

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

  const data = {
    newName,
    setNewName,
    handleNameChange,
    newNumber,
    setNewNumber,
    handleNumberChange
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

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter
        value={search}
        onChange={handleSearchChange}
      />

      <h2>Add new contact</h2>
      <PersonForm
        data={data}
        persons={persons}
        setPersons={setPersons}
      />

      <h2>Numbers</h2>
      <DisplayPersons
        isFiltered={isFiltered}
        persons={persons}
        search={search}
      />
    </div>
  )
}

export default App