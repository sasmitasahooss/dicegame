import React from 'react'

const Home = ({toggle}) => {
  return (
    <div id='home'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK6Z9SDmY3qEdZ7ZVkze7Y2MdC8vDAjXVgmw&s" alt="" />
      <div id="hr">
      <h1>Welcome to the Dice Game!</h1>
      <button onClick={toggle}>PLAY NOW</button>
      </div>
    </div>

  )
}

export default Home
