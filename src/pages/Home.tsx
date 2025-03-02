import React, { useState } from 'react'
import Navbar from '../components/Navbar'

export const Home: React.FC = () => {
      const [isAuthenticated] = useState(false); 
  return (
    <div className={isAuthenticated ? "min-h-screen flex" : "bg-[url('/bg.webp')] min-w-1200 bg-cover bg-center bg-fixed bg-no-repeat overflow-x-hidden "}>
  {isAuthenticated ? (
    <>
      <div className="min-h-screen min-w-[1400px] mx-auto">
        <Navbar />
        <h2>Fffffff</h2>
      </div>
      <div className="w-2/5 bg-gray-100 p-6">
        {/* Summary */}
      </div>
    </>
  ) : (
    <div className="min-h-screen min-w-[1200px] mx-auto">
      <Navbar />
      <h1>Salut</h1>
    </div>
  )}
</div>
  )
}
