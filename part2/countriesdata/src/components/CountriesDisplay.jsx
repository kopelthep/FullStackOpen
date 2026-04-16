import { Country } from "./Country";

export const CountriesDisplay = ({ countriesToShow,selectedCountry }) => {

  switch (true) {
    case (countriesToShow.length == 250):
      return(
        <></>
      )
    case (countriesToShow.length >= 10):
      console.log(">=10");
      return (
        <>Too many!</>
      );
    case (countriesToShow.length == 1):
      console.log("ONE");
      return (
        <Country countryinfo={selectedCountry}/>
      );
    default:
      console.log("default");
      return (
        
        (countriesToShow.map((countries, index) => <li key={index}>
          {countries}
        </li>
        ))
      );

  }



};
