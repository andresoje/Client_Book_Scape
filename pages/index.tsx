import React from 'react'
import Navbar from "../components/Navbar/Navbar"
import CardsBooks from '@/components/CardsBooks/CardsBooks'


function Home() {
  return (
    <div>
      <Navbar/>
      <h1>Home</h1>
      <CardsBooks/>
    </div>
  )
}

export default Home
