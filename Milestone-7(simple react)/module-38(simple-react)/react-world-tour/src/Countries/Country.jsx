import React, { useState } from 'react';
import './country.css'
const Country = ({country, handleVisitedCountry}) => {
    const [visited,setVisited]= useState(false);

    const handleVisited=()=>{
        // console.log("Visited");
        setVisited(visited ? false: true);

        handleVisitedCountry(country);
    }


    return (
        <div className={`country ${visited && 'visited-country'}`}>
            <h3>Name: {country.name.common}</h3>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <p>Populations: {country.population.population}</p>
            <p>Area: {country.area.area} { <small> {country.area.area > 300000 ? "Big Country" : "Small country"}</small>}</p>

            <button onClick={handleVisited}>{visited ? "Visited": "Not Visited"}</button>
        </div>
    );
};

export default Country;