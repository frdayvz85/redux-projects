import { FormControl, NativeSelect } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import styles from './CountryPicker.module.css'

import { fetchCountries } from '../../api'

const CountryPicker = ({handleCountryChange}) => {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        getCountries()
    }, [setCountries])

    const getCountries = async () => {
        setCountries(await fetchCountries())
    }
    return (
        <FormControl className={styles.container}>
            <NativeSelect onChange={(e)=>handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {
                    countries.map((country, i) => (
                        <option key={i} value={country}>{country}</option>
                    ))
                }
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker
