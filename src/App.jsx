import styled from 'styled-components';
import Home from './Components/home';
import MainPage from './Components/MainPage';
import { useState } from'react';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
 
 const toggle =()=>{
  setGameStarted(true);
 }
  
  return (
    <>
     {gameStarted? <MainPage /> : <Home toggle={toggle}/>}
    </>
  )
}

export default App
