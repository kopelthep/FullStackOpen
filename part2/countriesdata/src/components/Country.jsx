
export const Country = ({ countryinfo, selectedCountryWeather }) => {
    
    console.log("country comp", countryinfo);
    let country = countryinfo

    if (country !== null){
        const cityWeather = selectedCountryWeather == null ? {main:{temp:273.15},weather:[{icon:"01d"}],wind:{speed:0}} :selectedCountryWeather
        const image = `https://openweathermap.org/payload/api/media/file/${cityWeather.weather[0].icon}.png`
        console.log("cityweather",cityWeather)
        console.log("image",image)
        
        const transformed = (
            Object.entries(country.languages).map(([key, val]) => [key,val])
        )
        console.log("languages list",transformed)
        return(
            <>
            Placeholder : {country.name.common}
            <h1>
                {country.name.common}
            </h1>
            <div>Capital:{country.capital}</div>
            <div>Area:{country.area}</div>
            <h2>
                Languages
            </h2>
            <ul>
            {transformed.map(([key,language]) => (
                <li key={key}>
                    {language}
                </li>  
            ))}
            </ul>
            <img src={country.coatOfArms.svg} width="200px" height="200px" ></img>
            <h2>
                Weather in {country.capital}:
            </h2>
            <div>
                Temperature {((cityWeather.main.temp) - 273.15).toPrecision(3)} Celsius
            </div>
            <div>
                <img src={image}></img>
            </div>
            <div>
                Wind:{cityWeather.wind.speed} m/s
            </div>
                
                
            
            </>
        )
    
    }
    return (
        <></>
    );
};

