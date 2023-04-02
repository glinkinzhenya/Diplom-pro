import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { reset } from '../../../pages/SportPage/SportPage';

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

  const searchLocal = localStorage.getItem('searchLocal');
  const searchLocalMap = JSON.parse(searchLocal);

  let search;
  let pach = '/';

  searchLocalMap.map((i) => {
    if (i.name.toLowerCase() === inputValue.toLowerCase()) {
      search = i;
      pach = `/trainings/${newInputValue}`;
    }
    return ('');
  });

  const startQuiz = () => {
    localStorage.removeItem('trainingName');
    const newTrainings = JSON.stringify(search);
    localStorage.setItem('newTrainings', newTrainings);
    reset();
    setInputValue('');
  };

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
          <Link
            style={{ textDecoration: 'none', color: 'inherit' }}
            to={pach}
          >Пошук
          </Link>
        </button>

      </div>
    </>
  );
}
