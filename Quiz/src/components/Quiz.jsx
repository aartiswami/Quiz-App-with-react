import React, { useState, useEffect } from 'react';
import QuizData from '../data/QuizData.json';
import { useNavigate } from 'react-router-dom';

const Quiz = () => {
   const navigate = useNavigate()
   const [currQuestion, setCurrQuestion] = useState(0);
   const [score, setScore] = useState(0);
   const [clickedOption, setClickedOption] = useState(0);

   const changeQuestion = () => {
      localStorage.setItem('total', QuizData.length.toString());
      updateScore();

      if (currQuestion < QuizData.length - 1) {
         setCurrQuestion(currQuestion + 1);
         setClickedOption(0);
      } else {
         navigate('/result');
      }
   };

   const updateScore = () => {
      if (QuizData[currQuestion] && clickedOption === QuizData[currQuestion].answer) {
         const updatedScore = score + 1;
         setScore(updatedScore);
         localStorage.setItem('yourScore', updatedScore.toString());
      }
   };

   return (
      <div className="contents">
         <div className="question-content">
            <p>
               {currQuestion + 1}. {QuizData[currQuestion].question}
            </p>
         </div>
         <div className="option-content">
            {QuizData[currQuestion].options.map((option, index) => (
               <button
                  key={index}
                  className={`btn ${clickedOption == index + 1 ? "clicked-green" : null
                     }`}
                  onClick={() => setClickedOption(index + 1)}
               >
                  {option}
               </button>
            ))}
         </div>
         <div className="btn">
            <a className="btnfos btnfos-5" onClick={changeQuestion}>
               Next
            </a>
         </div>


      </div>
   );
};

export default Quiz;
