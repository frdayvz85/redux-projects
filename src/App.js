import React, { useEffect, useState } from 'react';
import './App.css';
import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css'
import { fetchData } from './api/'

function App() {
  const [state, setState] = useState({
    data:{},
    country:''
  })

  useEffect(() => {
    getDatas()
    handleCountryChange()
  }, [])

  const getDatas = async () => {
    const fetchedData = await fetchData()
    // setState(fetchedData)
    setState({data:fetchedData})
  }

  const handleCountryChange = async (country) => {
    const fetchedCountry = await fetchData(country)
    setState({data:fetchedCountry, country: country})
  }
  
  const {data, country} = state

  return (
    <div className={styles.container}>
      <img src="https://i.ibb.co/7QpKsCX/image.png" alt="Corona" />
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange}/>
      <Chart data={data} country={country}/>
    </div>
  );
}

export default App;
