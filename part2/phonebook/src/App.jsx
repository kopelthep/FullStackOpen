import { useState } from 'react'
import Numbers from "./components/Numbers"
function useRegex(input) {
    let regex = /^[+]?(?:\(\d+(?:\.\d+)?\)|\d+(?:\.\d+)?)(?:[ -]?(?:\(\d+(?:\.\d+)?\)|\d+(?:\.\d+)?))*(?:[ ]?(?:x|ext)\.?[ ]?\d{1,5})?$/i;
    return regex.test(input);
}// generated using https://regex-generator.olafneumann.org/?sampleText=541-123%206532&flags=Wi&selection=0%7CUS%20phone%20number
const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: "040-1234567"
    }
  ]) 
  
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")


  const addNumber = (event) =>{
    event.preventDefault()
    console.log("addnumber persons",persons)
    const foundName = persons.some(element => element.name === newName);
    const foundNumber = persons.some(element => element.number === newNumber);
    
    if (!(useRegex(newNumber))){
      return (
        alert(`${newNumber} is an invalid number!`)
      )
    }
    if(foundName && foundNumber) {
      return(alert(`${newName} and ${newNumber} already are in the phonebook !`)

      )
    }

    if (foundName) {
      return(alert(`${newName} is already added to phonebook`)
      )
    }
    if (foundNumber) {
      return(alert(`${newNumber} is someone else's number !`)
      )
    }
    
    // Overall inspired on https://stackoverflow.com/questions/22844560/check-if-object-value-exists-within-a-javascript-array-of-objects-and-if-not-add
    //PS: If someone is reading this: i'd rather check stack overflow than use AI when it comes to LEARNING (different thing when coding for other reasons)
    

    console.log('button clicked', event.target)
    const newNameObject= {
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(newNameObject))
    console.log("new persons list",persons)
  }


  const handleNameChange = (event) => {
    console.log("handleNamechange",event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange =  (event) => {
    console.log("handleNumberChange", event.target.value)
    console.log("regex result",useRegex(event.target.value))
    setNewNumber(event.target.value)

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
          number: <input 
            value = {newNumber}
            onChange={handleNumberChange}
          />
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <>{persons.map((persons) => (
          <Numbers key={persons.name} name={persons.name} number={persons.number} />
        ))}
      </>
        
      
      
    </div>
  )
}

export default App