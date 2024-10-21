import { Button } from '@mui/material'
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const QuizResult = ({ score, totalScore }) => {
   const navigate = useNavigate()
   const handleTryAgainClick = () => {
      navigate('/')
      localStorage.removeItem("total")	
      localStorage.removeItem("yourScore")
   };

   return (
      <div className='result-box'>
         <p>
            Your Score: {localStorage.getItem('yourScore')}
            <br />
            Total Score: {localStorage.getItem('total')}
         </p>
         <button className='btn-start' onClick={handleTryAgainClick}>
            Try Again!
         </button>
      </div>
   )
}

export default QuizResult
