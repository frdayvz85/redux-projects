import React, { useEffect, useState } from 'react';
import './App.css';
import Country from './components/Country';

function App() {

  const [countries, setCountries] = useState([])

  useEffect(() => {
    getAllCountries()
  }, [countries])

  const getAllCountries = async () => {
    const data = await fetch('https://restcountries.eu/rest/v2/all');
    const result = await data.json();
    setCountries(result)
    console.log(result)
  }

  return (
    <div className="App">
      <h1>Countries</h1>
      <div className="countries">
      {
        countries.map((country) => (
          <Country key={country.name} country={country} />
        ))
      }
      </div>
    </div>
  )
}

export default App;
