import { useState, useEffect } from 'react'
import Notification  from "./components/Notification.jsx"
import { Filter } from './components/Filter';
import { PersonForm } from './components/PersonForm';
import {Persons} from './components/Persons';
import personService from "./services/persons.js"

function useRegex(input) {
    let regex = /^[+]?(?:\(\d+(?:\.\d+)?\)|\d+(?:\.\d+)?)(?:[ -]?(?:\(\d+(?:\.\d+)?\)|\d+(?:\.\d+)?))*(?:[ ]?(?:x|ext)\.?[ ]?\d{1,5})?$/i;
    return regex.test(input);
}// generated using https://regex-generator.olafneumann.org/?sampleText=541-123%206532&flags=Wi&selection=0%7CUS%20phone%20number



const App = () => {

  const [persons, setPersons] = useState([]) 
  
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [newSearchName, setNewSearchName] = useState("")
  const [notificationDetails,setNotificationDetails] = useState({
    message:null,type:null
  }
  )

  
  
  
  useEffect(()=> {
    console.log('effect')
    personService
      .getAll()
      .then(response => {
        setPersons(response)
      })
  },[])
  console.log('render', persons.length, 'notes')

  
  const showNotification = (message,notificationType) => {

    const nullNotification ={
    message:null,
    type:null
    }
    const newNotification = {
      message: message,
      type : notificationType
    }
    setNotificationDetails(newNotification)
    setTimeout(() => {
      setNotificationDetails(nullNotification)
    }, 5000)

  }


  const namesToShow = persons.filter(persons => persons.name.toLowerCase().includes(newSearchName.toLowerCase()))// We put both to lowercase so we can just search using also the 
  // Stuff like uppercase names because searching case sensitive can cause problems
  //console.log("names to show:",namesToShow)

  const addNumber = (event) =>{
    event.preventDefault()
    console.log("addnumber persons",persons)
    const foundName = persons.some(element => element.name === newName)
    const foundNumber = persons.some(element => element.number === newNumber)
    
    
    if (!(useRegex(newNumber))){
      return (
        alert(`${newNumber} is an invalid number!`))
    }

    if(foundName && foundNumber) {
      return(alert(`${newName} and ${newNumber} already are in the phonebook !`))
    }

    else if (foundName) {
      if (window.confirm("This user already has a number in the phonebook, you want to override it with this number?")) {
        //console.log("change number")
        const toModify = persons.find(changedPerson => changedPerson.name == newName)
        //console.log("perosn to modify",toModify)
        const changedPerson = { ...toModify, number: newNumber }
        console.log("changed person",changedPerson)
        personService.update(changedPerson.id,changedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id === changedPerson.id ? returnedPerson : person))

          })
        return("")
      } 
      else {
        return(alert(`${newName} is already added to phonebook`))
      }
    }

    else if (foundNumber) {
      return(alert(`${newNumber} is someone else's number !`))
    }
    
    // Overall inspired on https://stackoverflow.com/questions/22844560/check-if-object-value-exists-within-a-javascript-array-of-objects-and-if-not-add
    //PS: If someone is reading this: i'd rather check stack overflow than use AI when it comes to learning (different thing when coding for other reasons)
    

    //console.log('button clicked', event.target)
    const newNameObject= {
      name: newName,
      number: newNumber,
      id: String(persons.length + 1),
    }
    personService
      .create(newNameObject)
      .then(response => {
        setPersons(persons.concat(response))
        setNewNumber("")
        setNewName("")
        showNotification(`${newName} was added to the phonebook`,"notification")
      })
      .catch(error =>{
        //console.log("error",error)
        console.log("error message:",error.response.data.error.message)// VERY long path that b asically is: we take the response data when error, specifically it's MESSAGE
        // and we then display THAT

        showNotification(error.response.data.error.message,"error")
      })
    
    //TODO
    
    
    //console.log("new persons list",persons)
  }
  const deletePerson = (id) => {
    console.log('currently deleting id number',id)
    if (window.confirm("Do you want to delete this person from the phonebook?")) {
      personService
        .deletion(id)
        .then(() => {
          setPersons(persons.filter(deletedPerson => deletedPerson.id !== id))
      })
      .catch(error =>{
        showNotification(`${(persons.find(x => x.id === id)).name} was already deleted from server`,"error")
        // alert(
        //   `${(persons.find(x => x.id === id)).name} was already deleted from server`
        // )
        setPersons(persons.filter(deletedPerson => deletedPerson.id !== id))
        
    })
    }
    else {
      console.log("Deletion cancelled")
    }
    
  }


  const handleNameChange = (event) => {
    //console.log("handleNamechange",event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange =  (event) => {
    //console.log("handleNumberChange", event.target.value)
    //console.log("regex result",useRegex(event.target.value))
    setNewNumber(event.target.value)

  }
  const handleNameSearchChange = (event) => {
    //console.log("handleNameSearchChange",event.target.value)
    setNewSearchName(event.target.value)
  }

  const resetSearch = (event) => {
    event.preventDefault()
    //console.log("reset button pressed")
    setNewSearchName("")

  }
  console.log(namesToShow)

  
  return (//The way i have done "Persons" is PROBABLY not the best practice but it makes "app" overall very clean
    <div>
      <h2>Phonebook</h2>
      <Notification notificationDetails={notificationDetails}/>
      <Filter value={newSearchName} onReset={resetSearch} onChange={handleNameSearchChange}/>
      
      <h3>Add a new entry</h3>
      <PersonForm onSubmit={addNumber} nameValue={newName} nameHandler={handleNameChange} numberValue={newNumber} numberHandler={handleNumberChange} />
      
      <h3>Numbers</h3>
      <Persons namesToShow={namesToShow} deletePerson={deletePerson}/>
      
    </div>
  )
}

export default App