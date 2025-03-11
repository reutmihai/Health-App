import React, { useState } from 'react'
import HomeUser from '../components/HomeUser';
import HomeGuest from "../components/HomeGuest";

export const HomePage: React.FC = () => {
      const [isAuthenticated] = useState(true); 
  return (
    <>
    {isAuthenticated ? <HomeUser /> : <HomeGuest />}
    </>
  )
}
