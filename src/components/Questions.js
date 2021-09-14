import React, { useContext, useState, useEffect } from 'react'
import { AppContext } from '../contexts/AppContext'
import Education from './Education'
import PersonalInfo from './PersonalInfo'
import Main from './Main'
import WorkExperience from './WorkExperience'
import Skills from './Skills'
import Resume from './Resume'

const Questions = () => {
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        country: '',
        state: '',
        birthday: '',
        gender: '',
        about: '',
        photo: 'https://www.jetphotos.com/assets/img/user.png',
        //education
        university: '',
        degree: '',
        countryUni:'',
        major:'',
        startDate: '',
        endDate: '',
        skills: [],
        //experience
        speciality: '',
        company: '',
        workStartDate1: '',
        workEndDate1: '',
        jobCountry: '',
        address: '',
        jobDescription: '',
    })
    const [countries, setCountries] = useState([])
    const { activeStep } = useContext(AppContext)
    const myCtx = useContext(AppContext)
    console.log(activeStep)
    console.log(myCtx)
    useEffect(() => {

    }, [activeStep])


    useEffect(() => {
        getCountries()
    }, [])

    const getCountries = async () => {
        try {
            const data = await fetch('https://restcountries.eu/rest/v2/all')
            const response = await data.json()
            console.log(response)
            setCountries(response)
        } catch (error) {
            console.log(error)
        }
    }


    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };
    const handleChangePhoto = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setState({ ...state, photo: reader.result });
            }
        };
        reader.readAsDataURL(e.target.files[0]);
        // setState({ ...state, photo: URL.createObjectURL(e.target.files[0]) })
    }
    return (
        <div className="resume--header">
            <Main state={state}>
                {activeStep === 0 && <PersonalInfo countries={countries} state={state} setState={setState} handleChange={handleChange} handleChangePhoto={handleChangePhoto} />}
                {activeStep === 1 && <Education countries={countries} state={state} setState={setState} handleChange={handleChange} />}
                {activeStep === 2 && <WorkExperience countries={countries} state={state} setState={setState} handleChange={handleChange} />}
                {activeStep === 3 && <Skills countries={countries} state={state} setState={setState} handleChange={handleChange} />}
                {activeStep === 4 && <Resume countries={countries} state={state} setState={setState} handleChange={handleChange} />}
            </Main>
        </div>
    )
}

export default Questions
