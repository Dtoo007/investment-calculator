import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import UserInput from './components/UserInput'
import Results from './components/Results'

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
})

const validInput = userInput.duration >= 1;

function handleChange (inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
        return {
            ...prevUserInput,
            [inputIdentifier]: newValue
        };
    });
}


  return (
    <div>
      <Header/>
      <UserInput userInput={userInput} onChange={handleChange}/>
      {!validInput && (<p className='center'>Pls, input number greater than zero.</p>)}
      {validInput && <Results input={userInput}/>}
    </div>
  )
}

export default App
