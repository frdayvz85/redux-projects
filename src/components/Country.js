import React, { useState } from 'react';
import styles from './country.module.css';


const Country = ({ country }) => {
    const [open, setOpen] = useState(false);

    const handleShow = () => {
        setOpen(!open);
    }

    const className = `detail ${open ? 'showDetail' : 'closeDetail'}`;

    return (
        <div className={styles.container}>
            <h2 className={styles.countryName}>{country.name}</h2>
            <div className="body">
                <img src={country.flag} alt="{country.name}" />
                <button className={styles.moreShowBtn} onClick={handleShow}>More show</button>
            </div>
            <div className={className}>
                <h3>Name:<em>{country.name}</em></h3>
                <h4>Capital:<em>{country.capital}</em></h4>
                <h4>Calling code:<em>{country.callingCodes}</em></h4>
                <h4>Native name:<em>{country.nativeName}</em></h4>
                <h4>Region:<em>{country.region}</em></h4>
            </div>
        </div>
    )
}

export default Country
