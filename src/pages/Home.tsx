import React from 'react'
import { Link } from 'react-router-dom'

export const Home: React.FC = () => {
  return (
    <div>
    <h1>Welcome to SlimMom!</h1>
    <Link to="/calculator">
      <button>Go to Calculator</button>
    </Link>
  </div>
  )
}
