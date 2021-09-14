import React, { createContext, useState } from 'react'

export const AppContext = createContext({
    user: null,
    login: () => { },
    logout: () => { },
})

const initialState = {
    name: 'Guset',
    isGuest: true
}

const AppProvider = (props) => {
    const [user, setUser] = useState(initialState);
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const steps = ['Personal Information', 'Education', 'Work Experience', 'Skills', 'Finish'];
    return (
        <AppContext.Provider value={{ activeStep, setActiveStep,steps, handleNext, handleBack }}>{props.children}</AppContext.Provider>
    )
}

export default AppProvider

