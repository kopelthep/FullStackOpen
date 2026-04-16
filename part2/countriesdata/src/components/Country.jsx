

export const Country = ({ countryinfo}) => {
    
    console.log("country comp", countryinfo);
    let country = countryinfo
    
    if (country !== null){

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
            <img src={country.coatOfArms.svg}></img>
            </>
        )
    
    }
    return (
        <></>
    );
};

