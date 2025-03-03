import React from 'react'
import { Link } from 'react-router-dom'

export const Calculator : React.FC = () => {
  return (
    <div>
    <h2>Calculate your daily calorie intake</h2>
    {/* Aici va fi formularul tău */}
    <Link to="/">
        <button>Go to Home</button>
      </Link>
  </div>
  )
}
