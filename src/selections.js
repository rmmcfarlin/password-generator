import React, { useState } from 'react'
import checkIcon from './assets/images/icon-check.svg'
import arrowIcon from './assets/images/icon-arrow-right.svg'
import generatePassword from './randomizer.js'
import OutputSection from './output';
import StrengthRating from './strengthMeter';



const GenerateButton = ({onClick}) => {
    
    return (
          <div class="generate-button" onClick={onClick}>
                <p>GENERATE</p>
                <img src={arrowIcon} style={{width:"11px", height:"12px"}}></img>
           </div>
    )
}



const PasswordSelections =  () => {

    const [password, setPassword] = useState ('')
    const [length, setLength] = useState(5)
    const [uppercase, setUppercase] = useState(false)
    const [lowercase, setLowercase] = useState(true)
    const [numbers, setNumbers] = useState(false)
    const [symbols, setSymbols] = useState(false)


    const handleChange = (e) => {
        setLength(e.target.value)
    }

    const getPassword = () => {
        setPassword(generatePassword(length, lowercase, uppercase, numbers, symbols))
    }

    const selectLowercase = () => {
        setLowercase(!lowercase)
    }

    const selectUppercase = () => {
        setUppercase(!uppercase)
    }

    const selectNumbers = () => {
        setNumbers(!numbers)
    }

    const selectSymbols = () => {
       setSymbols(!symbols)
    }


    

    return (
        <div>
        <OutputSection passwordOutput={password}/>
        <div className="selections">
            <div className="length-display">
                <p>Character Length</p>
                <p id="lengthValue">{length}</p>
            </div>
            <form>
                <input type="range" id="lengthSlider" min="5" max="15" value={length} onChange={handleChange}></input>

                 <div className="checkbox"> 
                    <img src={checkIcon} style={{width:"20px", height:"20px"}} className="checkIcon"></img>
                    <input type="checkbox" id="lowercase" checked={lowercase} onChange={selectLowercase}></input>
                    <label for="lowercase">Include Lowercase Letters</label>
                </div>

               <div className="checkbox">
                <img src={checkIcon} style={{width:"20px", height:"20px"}} className={"checkIcon"}></img>
                <input type="checkbox" id="uppercase" checked={uppercase} onChange={selectUppercase}></input>
                <label for="uppercase">Include Uppercase Letters</label>
               </div>

               
               <div className="checkbox">
                <img src={checkIcon} style={{width:"20px", height:"20px"}} className="checkIcon"></img>
                 <input type="checkbox" id="numbers" checked={numbers} onChange={selectNumbers}></input>
                 <label for="numbers">Include Numbers</label>
               </div>

                <div className="checkbox">
                    <img src={checkIcon} style={{width:"20px", height:"20px"}} className="checkIcon"></img>
                  <input type="checkbox" id="symbols" checked={symbols} onChange={selectSymbols}></input>
                  <label for="symbols">Include Symbols</label>
                </div>
            </form>

         <StrengthRating passwordOutput={password} />
         <GenerateButton passwordLength={length} lowercaseCheck={lowercase} uppercaseCheck={uppercase} numCheck={numbers} symbolCheck={symbols} onClick={getPassword} />
        </div>
      </div>
    )
}

export default PasswordSelections