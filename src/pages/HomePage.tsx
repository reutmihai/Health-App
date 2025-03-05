import React, { useState } from 'react'
import HomeUser from '../components/HomeUser';
import HomeGuest from "../components/HomeGuest";

export const HomePage: React.FC = () => {
      const [isAuthenticated] = useState(false); 
  return (
    <>
    {isAuthenticated ? <HomeUser /> : <HomeGuest />}
    </>
  )
}
