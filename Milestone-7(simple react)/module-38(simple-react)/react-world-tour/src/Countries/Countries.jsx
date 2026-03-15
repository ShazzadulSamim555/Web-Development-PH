import React, { use, useEffect, useState } from "react";
import Country from "./Country";
import './countries.css'

const Countries = ({ countryPromise }) => {
  const countryData = use(countryPromise);
  const countries = countryData.countries;
  // console.log(countries);

  const [visitedCountry, setVisitedCountry]=useState([]);

  const handleVisitedCountry=(country)=>{
    console.log('Visited Country Clicked.', country.name.common);
    const newVisitedCountry= [...visitedCountry, country];
    setVisitedCountry(newVisitedCountry);
  }

  return (
    <div>
      <h1>Countries Tour...: {countries.length}</h1>

      <h3>Visited Country: {visitedCountry.length}</h3>

      <ol>
        {
          visitedCountry.map(country=> <li>{country.name.common}</li>)
        }
      </ol>

      <div className="countries">
        {countries.map((country) => (
          <Country country={country} handleVisitedCountry={handleVisitedCountry}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
