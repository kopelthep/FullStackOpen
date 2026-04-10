import { useState } from 'react'
import Numbers from "./components/Numbers"
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas'
    }
  ]) 
  const [newName, setNewName] = useState('')
  const addNumber = (event) =>{
    event.preventDefault()
    console.log("addnumber persons",persons)
    const found = persons.some(el => el.name === newName);
    if (found) {
      return(alert(`${newName} is already added to phonebook`)
      )
    }// Overall inspired on https://stackoverflow.com/questions/22844560/check-if-object-value-exists-within-a-javascript-array-of-objects-and-if-not-add
    //PS: If someone is reading this: i'd rather check stack overflow than use AI when it comes to LEARNING (different thing when coding for other reasons)
    console.log('button clicked', event.target)
    const newNameObject= {
      name: newName,
    }
    setPersons(persons.concat(newNameObject))
    console.log("new persons list",persons)
  }
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNumber}>
        <div>
          name: <input 
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <>{persons.map((persons) => (
          <Numbers key={persons.name} name={persons.name} />
        ))}
      </>
        
      
      
    </div>
  )
}

export default App