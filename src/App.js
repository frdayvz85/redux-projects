import { Container } from '@material-ui/core';
import React from 'react'
import Questions from './components/Questions'

const App = () => {
  const [activeStep, setActiveStep] = React.useState(1);
  return (
    <div>
      <Container>
        <h1 className="header">Create your Resume</h1>
        <Questions />
      </Container>
    </div>
  )
}

export default App
