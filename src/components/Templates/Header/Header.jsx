import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CreateModal from '../Main/ComponentMain/CreateModal';
import './Header.css';
import { trainings } from '../Main/Main';



export default function Header() {

  const [inputWidth, setInputWidth] = useState('120px');

  const handleFocus = () => {
    setInputWidth('180px');
  };

  const handleBlur = () => {
    setInputWidth('120px');
  };

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };


  const newInputValue = inputValue.split(' ').join('_').toLowerCase();

  let ok = false;
  // переменная для записи того что вводим при поиске
  let search = null;

  {
    trainings.map((i) => {
      if (i.name.toLowerCase() === inputValue.toLowerCase()) {

        search = i;

        localStorage.removeItem('trainingName');


        ok = true
      }
    });
  }



  const startQuiz = () => {

    const newTrainings = JSON.stringify(search);
    localStorage.setItem('newTrainings', newTrainings);
    
  };

  let pach;
  ok ? pach = `/gym_team/${newInputValue}` : pach = "";

  return (
    <>
      <h1 className='header-title'>Gym Team</h1>
      <div>
        <input
          onClick={handleFocus}
          onBlur={handleBlur}
          value={inputValue}
          onChange={handleInputChange}
          style={{ width: inputWidth, transition: 'width 0.2s ease-in-out' }}
          type='text'
          placeholder='Пошук тренування'
        />

        <button onClick={startQuiz} className='headerButton'>
          {
            // ok &&
            <Link
              style={{ textDecoration: 'none' }}
              to={`${pach}`}

            >Пошук
            </Link>
          }
        </button>

      </div>
    </>
  );
}
