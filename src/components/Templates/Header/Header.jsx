import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './Header.css';
import { useMediaQuery } from '@mui/material';
import { trainingsActions } from '../../../store/modules/trainings';
import BurgerBig from './ComponentHeader/Burger';

export default function Header() {
  const [inputWidth, setInputWidth] = useState('120px');
  const handleFocus = () => {
    setInputWidth('180px');
  };
  const handleBlur = () => {
    setInputWidth('120px');
  };

  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    dispatch(trainingsActions.filterTrainings({ search: inputValue }));
  };

  const burgerTrue = useMediaQuery('(min-width:625px)');

  return (
    <>
      <Link
        to={'/'}
        style={{ textDecoration: 'none' }}
      >
        <h1 className='header-title'>Gym Team </h1>
      </Link>
      <div>
        <Link
          style={{ display: 'block', padding: '10px' }}
          to={'/trainings'}
        >
          <input
            onClick={handleFocus}
            onBlur={handleBlur}
            value={inputValue}
            onChange={handleInputChange}
            style={{ width: inputWidth, transition: 'width 0.2s ease-in-out' }}
            type='text'
            placeholder='Пошук тренування'
          />
        </Link>
      </div >
      {!burgerTrue && <BurgerBig />}
    </>
  );
}
