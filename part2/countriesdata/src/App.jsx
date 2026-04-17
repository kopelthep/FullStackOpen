import { useState, useEffect } from 'react'
//import Notification  from "./components/Notification.jsx"
import { Filter } from './components/Filter';
import countryService from "./services/countries.js"
import { CountriesDisplay } from './components/CountriesDisplay.jsx';
import { Country } from "./components/Country";


const App = () => {
  const [countries,setCountries] = useState([])
  //const notificationDetails =["placeholder","error"]
  const [searchField, setSearchField] = useState("")
  const [selectedCountry, setSelectedCountry] = useState(null)
  const countriesName = (countries.map(countries => countries.name.common ))


  useEffect(()=> {
      console.log('effect HAS HAPPENED')
      countryService
        .getAll()
        .then(response => {
          console.log("ineffect response full",response)
          setCountries(response)
          
        })
  },[])

  const countriesToShow = countriesName.filter(countries => countries.toLowerCase().includes(searchField.toLowerCase()))// We put both to lowercase so we can just search using also the 
  // Stuff like uppercase names because searching case sensitive can cause problems
  
  console.log("countries to show:",countriesToShow)
  let singleCountry = countriesToShow.length === 1 ? countriesToShow[0] : null
  console.log("singlecountry",singleCountry)

  

  const makeSelected = (name) => {
    console.log("MAKESELECTED",name)
    //NOTE: For now i am making this simply set the search field to the 
    // const countryToSet = countries.filter(countries => countries.toLowerCase().includes(name.toLowerCase()))
    // console.log("countrytoset",countryToSet)
    // countriesToShow = countryToSet
    // singleCountry = name
    // console.log("ihnside",singleCountry)
    console.log("thing selectedcountry set to",countries[(countriesName.indexOf(name))])
    singleCountry = name
    setSelectedCountry(countries[(countriesName.indexOf(name))])
    
  
    console.log("response in makeselected IN THEN",selectedCountry)


    // countryService// IF there is we do the request, so as to avoid loops and all
    //   .getCountry(name)
    //   .then(response => {
        
    //     return(
    //       <Country countryinfo={selectedCountry}/>
    //     )
    //   })
    //console.log("response in makeselected",response)
    
    

  }

  useEffect(() => {
    if(!singleCountry){// If there is no one sleected country we return undefined
      setSelectedCountry(null)
      return(undefined)
    }
    console.log("singlecountry info",singleCountry)
    console.log ("attempt to find index",countriesName.indexOf(singleCountry))//FUCK it works
    console.log ("infull",countries[(countriesName.indexOf(singleCountry))])
    setSelectedCountry(countries[(countriesName.indexOf(singleCountry))])
    // countryService// IF there is we do the request, so as to avoid loops and all
    //   .getCountry(singleCountry)
    //   .then(response => {
    //     console.log("selectedcountryeffectengaged")
    //     setSelectedCountry(response)
    //   })
  }, [singleCountry])

  
  
 
  console.log('render', countriesName.length, 'countries')
  
  countriesToShow

  const handleSearchChange = (event) => {
    //console.log("handleSearchChange",event.target.value)
    //singleCountry = null
    setSelectedCountry(null)
    setSearchField(event.target.value)
    
  }
  const resetSearch = (event) => {
    event.preventDefault()
    //console.log("reset button pressed")
    //setSelectedCountry(null)
    setSearchField("")
  }
  //const trueChoose = selectedCountry === null ? countriesToShow : selectedCountry
  return (
    <div>
      <h2>Country lookup</h2>
      <Filter value={searchField} onReset={resetSearch} onChange={handleSearchChange}/>
      <CountriesDisplay countriesToShow={countriesToShow} selectedCountry={selectedCountry} makeSelected={makeSelected}/>
      
    </div>
  )
}

export default App