import React, {useState} from 'react'

const MainPage = () => {
    const [score, setScore] = useState('0')
    const number = [1, 2, 3, 4, 5,6]
    const [diceNumber, setDiceNumber] = useState('')
    const [currentDice, setCurrentDice] = useState(1)
    const [error, setError] = useState("")
  
    const generateRandomNumber = () => {
      return (Math.floor(Math.random() * 6) + 1)
     }

    const roleDice = () => {
      if (diceNumber === '') {
        setError("Please select a number"); 
        return; 
      }
      setCurrentDice(generateRandomNumber());
      if(diceNumber == generateRandomNumber()) {
        setScore(diceNumber)
      }
      else{
        setScore(diceNumber-2)
      }

    }
   
    
  return (
    <>
    {/* {error && <div style={{ color: 'red', marginLeft: '43vw', marginTop:'1vw' }}>{error}</div>}  */}

      <nav>
        <div id="navl">
            <h1>
                {score}
            </h1>
            
        </div>
        <p>{error}</p>
        <div id="navr">
          {number.map((value, i) =>{
            return <button key={i} onClick={()=>{
              setDiceNumber(value)
              setError(""); // Clear error if a number is selected

            }}
            >{value}</button>
          })  
          }
       
        </div> 
      </nav>
      <div className="lines">
      <h4>Total Score</h4>
      <h4>Select Numbers</h4>
      </div>
      <div id="dice">
        <div onClick={roleDice}>
        <img  src={`/images/dice_${currentDice}.png`} alt="dice" />
        </div>
        <h4>Click on the dice to roll</h4>
        <button>Reset Score</button>
        <button>Show Rules</button>
      </div>
      <div id="rules">
        <h1>How to play dice game</h1>
        <p>Select any number<br/>Click on the dice image<br/>after click on  dice  if selected number is equal to dice number you will get same point as dice <br/>if you get wrong guess then  2 point will be dedcuted </p>
      </div>
      
    </>
  )
}

export default MainPage
