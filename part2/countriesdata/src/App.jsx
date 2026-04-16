import { useState, useEffect } from 'react'
import Notification  from "./components/Notification.jsx"
import { Filter } from './components/Filter';
import countryService from "./services/countries.js"
import { CountriesDisplay } from './components/CountriesDisplay.jsx';


const App = () => {
  const [countries,setCountries] = useState([])
  const notificationDetails =["placeholder","error"]
  const [searchField, setSearchField] = useState("")
  const [selectedCountry, setSelectedCountry] = useState(null)





  const countriesToShow = countries.filter(countries => countries.toLowerCase().includes(searchField.toLowerCase()))// We put both to lowercase so we can just search using also the 
  // Stuff like uppercase names because searching case sensitive can cause problems
  // NOTE: a fix to still implement is how to fix the cases like the US that have their full name be PART of othere's full name like the US virgin islands for ex.
  // But this seems out of scope
  console.log("countries to show:",countriesToShow)
  const singleCountry = countriesToShow.length === 1 ? countriesToShow[0] : null

  const handleSearchChange = (event) => {
    //console.log("handleSearchChange",event.target.value)
    setSearchField(event.target.value)
  }
  const resetSearch = (event) => {
    event.preventDefault()
    //console.log("reset button pressed")
    setSearchField("")
  }

  useEffect(() => {
    if(!singleCountry){
      setSelectedCountry(null)
      return(undefined)
    }
    countryService
      .getCountry(singleCountry)
      .then(response => {
        console.log("selectedcountryeffectengaged")
        setSelectedCountry(response)
      })
  }, [singleCountry])

  
  useEffect(()=> {
      console.log('effect HAS HAPPENED')
      countryService
        .getAll()
        .then(response => {
          setCountries(response.map(countries => countries.name.common ))
          //countriesName = (countries.map(countries => countries.name.common ))
        })
  },[])
 
  console.log('render', countries.length, 'countries')
  //console.log(countries.map(countries => console.log(countries.name)))
  //Countries is List of common names of countries that we can look at
  //PLAN: search THIS list until we have ONE match
  //After which we query the API with the specific match.
  console.log("countries",countries)
  
  return (
    <div>
      <h2>Country lookup</h2>
      <Notification notificationDetails={notificationDetails}/>
      <Filter value={searchField} onReset={resetSearch} onChange={handleSearchChange}/>
      <CountriesDisplay countriesToShow={countriesToShow} selectedCountry={selectedCountry}/>
      
    </div>
  )
}

export default App