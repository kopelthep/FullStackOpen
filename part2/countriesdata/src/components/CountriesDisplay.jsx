import { Country } from "./Country";

export const CountriesDisplay = ({ countriesToShow,selectedCountry,makeSelected }) => {//Countries to show is the common names. 
  // Selectedcountry is the specific chosen country's info in full

  console.log("thisiscountriestoshow insinde display",countriesToShow)

  switch (true) {
    case (countriesToShow.length >= 250):
      return(
        <></>
      )
    case (countriesToShow.length >= 10):
      console.log(">=10");
      return (
        <>Too many!</>
      );
    case (countriesToShow.length == 1):
      console.log("ONE",countriesToShow);
      console.log("selectedcountry in one",selectedCountry)
      return (
        <Country countryinfo={selectedCountry}/>
      );
    default:// entre 10 et 2
      if(selectedCountry !== null){
        
        return(<Country countryinfo={selectedCountry}/>

        )
      }
      console.log("default");
      //check if clicked ?
      return (
        
        (countriesToShow.map((countries, index) => <li key={index}>
          {countries} <button onClick={()=>makeSelected(countries)}>Make selected</button>
          <Country countryinfo={selectedCountry}/>
        </li>
        ))
      );

  }



};
